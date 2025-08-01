import FloatingNav from "@/components/common/FloatingNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}
