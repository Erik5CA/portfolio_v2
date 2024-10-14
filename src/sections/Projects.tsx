import { useState } from "react";
import { myProjects } from "../constants";
// import { Canvas } from "@react-three/fiber";
// import { Center, OrbitControls } from "@react-three/drei";
// import CanvasLoader from "../components/CanvasLoader";
// import DemoComputer from "../components/DemoComputer";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction: "next" | "previous") => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-2" id="projects">
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:py-10 p-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
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
                <div className="tech-logo" key={index}>
                  <img src={tag.path} alt={tag.name} />
                </div>
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
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-60 lg:h-full md:p-5">
          <div
            style={{ backgroundImage: `url(${currentProject.texture})` }}
            className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-700"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
