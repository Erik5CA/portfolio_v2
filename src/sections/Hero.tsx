import { Canvas, Vector3 } from "@react-three/fiber";
import { HackerRoom as Room } from "../components/Room";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen relative w-full flex flex-col" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-28 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi there, I'm Erik <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Software Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile}>
              <Room
                position={sizes.deskPosition as Vector3}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 flex justify-center w-full z-10 c-space">
        <a href="#contact" className="w-fit inline-block mx-auto cursor-auto">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
