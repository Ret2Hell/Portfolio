import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { Astronaut } from "./Astronaut";
import Loader from "./Loader";

const HeroScene = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 1, 3] }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance" }}
      >
        <Suspense fallback={<Loader />}>
          <Float>
            <Astronaut
              scale={isMobile ? 0.23 : 0.3}
              position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
            />
          </Float>
          <Rig />
        </Suspense>
      </Canvas>
    </figure>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default HeroScene;
