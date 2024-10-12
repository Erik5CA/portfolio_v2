import { useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

const World = () => {
  const glebeRef = useRef<GlobeMethods>(null);

  useEffect(() => {
    const globe = glebeRef.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.9;
    }
  }, []);

  return (
    <Globe
      ref={glebeRef}
      height={326}
      width={326}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere
      showGraticules
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      animateIn={false}
    />
  );
};

export default World;