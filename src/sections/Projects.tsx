import { useState } from "react";
import { myProjects } from "../constants/projects";
import { motion, AnimatePresence } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { Center, OrbitControls } from "@react-three/drei";
// import CanvasLoader from "../components/CanvasLoader";
// import DemoComputer from "../components/DemoComputer";

const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
  },
};

const variants = {
  initial: {
    opacity: 0.3,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0.3,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction: "next" | "previous") => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        setDirection("right");
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        setDirection("left");
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-2" id="projects">
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <motion.div
          className="flex flex-col gap-5 relative sm:py-10 p-5 shadow-2xl shadow-black-200"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          key={selectedProjectIndex}
        >
          <div className="absolute top-0 right-0">
            <motion.img
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl -z-10"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <motion.div
                  className="tech-logo"
                  key={index}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                >
                  <img src={tag.path} alt={tag.name} width={20} height={20} />
                </motion.div>
              ))}
            </div>

            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 cursor-pointer p-2 transition-all duration-200 text-white-600 rounded-md hover:bg-black-300 group"
            >
              <p>Check Live Site</p>
              <img
                src="/assets/arrow-up.png"
                alt="arrow"
                className="w-3 h-3 group-hover:animate-arrow-up-right"
              />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </motion.div>

        <div className="relative flex flex-col justify-center items-center border border-black-300 bg-black-200 rounded-lg h-72 lg:h-full md:p-5 overflow-x-hidden">
          <AnimatePresence>
            <motion.div
              key={selectedProjectIndex}
              style={{ backgroundImage: `url(${currentProject.texture})` }}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className="absolute p-5 w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat aspect-video"
            ></motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
