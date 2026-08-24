import { lazy, Suspense } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./sections/Footer";

const Experiences = lazy(() => import("./sections/Experiences"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={null}>
        <Experiences />
        <Projects />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
