import { lazy, Suspense, useEffect, useState } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";

const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const idleWindow = window as typeof window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const id = idleWindow.requestIdleCallback
      ? idleWindow.requestIdleCallback(() => setShowScene(true), { timeout: 1500 })
      : window.setTimeout(() => setShowScene(true), 500);

    return () => {
      if (idleWindow.cancelIdleCallback) idleWindow.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, []);

  return (
    <section
      id="home"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />
      {showScene && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}
    </section>
  );
};

export default Hero;
