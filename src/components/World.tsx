import { useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

const World = () => {
  const glebeRef = useRef<GlobeMethods>(null);

  useEffect(() => {
    const globe = glebeRef.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 1;
      globe.controls().enableZoom = false;
      globe.controls().enablePan = false;
    }
  }, []);

  return (
    <Globe
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={glebeRef as any}
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
