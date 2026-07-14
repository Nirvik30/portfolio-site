import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host");
  const host = forwardedHost?.split(",")[0]?.trim() ?? requestHeaders.get("host");
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const protocol = forwardedProtocol ?? (host?.includes("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "https://nirvikach.me";
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Nirvik Acharekar — Product designer & developer",
      template: "%s — Nirvik Acharekar",
    },
    description:
      "Portfolio of Nirvik Acharekar, a product designer and developer in Mumbai shaping clear, reliable digital products.",
    applicationName: "Nirvik Acharekar",
    authors: [{ name: "Nirvik Acharekar", url: "https://nirvikach.me" }],
    creator: "Nirvik Acharekar",
    keywords: [
      "Nirvik Acharekar",
      "product designer",
      "design engineer",
      "full-stack developer",
      "Next.js developer",
      "Mumbai",
    ],
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: origin,
      title: "Nirvik Acharekar — Product designer & developer",
      description: "Design engineering for clear, reliable digital products.",
      siteName: "Nirvik Acharekar",
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: "Nirvik Acharekar — Product designer & developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nirvik Acharekar — Product designer & developer",
      description: "Design engineering for clear, reliable digital products.",
      images: [socialImage],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#f5f3ee",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='dark'?'dark':'light'}catch(e){}",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
