import { defineConfig } from "vite";
import vinext from "vinext";
import hostingConfig from "./.openai/hosting.json";
import { sites } from "./scripts/sites-vite-plugin";

const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";
const { d1, r2 } = hostingConfig;
const placeholderDatabaseId = "00000000-0000-4000-8000-000000000000";

const workerConfig = {
  main: "./worker/index.ts",
  compatibility_flags: ["nodejs_compat"],
  d1_databases: d1
    ? [
        {
          binding: d1,
          database_name: "portfolio-site-d1",
          database_id: placeholderDatabaseId,
        },
      ]
    : [],
  r2_buckets: r2
    ? [{ binding: r2, bucket_name: "portfolio-site-r2" }]
    : [],
};

export default defineConfig(async () => {
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    server: isCodexSeatbeltSandbox
      ? { watch: { useFsEvents: false, usePolling: true } }
      : undefined,
    plugins: [
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: workerConfig,
      }),
    ],
  };
});
