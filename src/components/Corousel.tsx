import { useEffect, useState } from "react";

const sliders = [
  "assets/react.svg",
  "assets/next-js.svg",
  "assets/typescript.svg",
  "assets/javascript.svg",
  "assets/css.svg",
  "assets/html.svg",
  "assets/tailwind.svg",
  "assets/python.svg",
  "assets/postgresql.svg",
  "assets/mongo.svg",
  "assets/redux.svg",
  "assets/react-router.svg",
];

const Corousel = ({ autoSlide = false, autoSlideSpeed = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [showImage, setShowImage] = useState(false);

  const nextSlide = () => {
    // setShowImage(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
    );
    // setTimeout(() => {
    //   setShowImage(true);
    // }, 2900);
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoSlideSpeed);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="overflow-hidden w-full md:h-[276px] h-[200px] md:p-16 p-16">
      <div className="flex h-full">
        <img
          className="w-full h-full object-contain copy"
          src={sliders[currentIndex]}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Corousel;
