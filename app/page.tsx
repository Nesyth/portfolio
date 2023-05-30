import { Wave } from "@/public/icons/wave";
import Footer from "@/components/Footer";
import AboutMe from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Scene from "@/components/WebGL";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Scene />
      <Wave />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
