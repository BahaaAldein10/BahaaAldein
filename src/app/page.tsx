import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Gallery from "@/components/shared/Gallery";
import Hero from "@/components/shared/Hero";
import Skills from "@/components/shared/Skills";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}
