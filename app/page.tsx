import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <Hero />
      <Work />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
