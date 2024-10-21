import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },

  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.8,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      // delay: 0.5,
      duration: 0.5,
    },
  },
};

const Corousel = ({ autoSlide = false, autoSlideSpeed = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
    );
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
    <div className="overflow-hidden w-full md:h-[276px] h-[200px] md:p-16 p-14">
      <AnimatePresence>
        <motion.div
          className="inset-0 mt-5 flex h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${sliders[currentIndex]})` }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          key={currentIndex}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Corousel;
