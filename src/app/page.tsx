import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
