import { lazy, Suspense, useEffect, useRef, useState } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";

const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
  const [sceneReady, setSceneReady] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsHeroVisible(entry.isIntersecting), {
      rootMargin: "100px 0px",
    });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const idleWindow = window as typeof window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const id = idleWindow.requestIdleCallback
      ? idleWindow.requestIdleCallback(() => setSceneReady(true), { timeout: 1500 })
      : window.setTimeout(() => setSceneReady(true), 500);

    return () => {
      if (idleWindow.cancelIdleCallback) idleWindow.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />
      {sceneReady && isHeroVisible && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}
    </section>
  );
};

export default Hero;
