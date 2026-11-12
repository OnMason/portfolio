import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Resume />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
