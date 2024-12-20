import Button from "../components/Button";
import { useState } from "react";
import World from "../components/World";
import Corousel from "../components/Corousel";
import { motion } from "framer-motion";
import AboutItem from "../components/AboutItem";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("erik.anzures.castillo@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <p className="head-text">About me</p>
      <motion.div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full mt-12">
        <AboutItem className="col-span-1 xl:row-span-3 ">
          <img
            src="/assets/Designer.png"
            alt="grid-1"
            className="w-full sm:h-[276px] h-fit object-contain"
          />

          <div>
            <p className="grid-headtext">Hi, I'm Erik</p>
            <p className="grid-subtext">
              Software Developer with 2 years of experience in web design
              projects. Focused on the creation of clear codes and with the
              ability to meet the objectives and needs of the client.
            </p>
          </div>
        </AboutItem>

        <AboutItem className="col-span-1 xl:row-span-3">
          <Corousel autoSlide={true} />

          <div>
            <p className="grid-headtext">My Objetives</p>
            <p className="grid-subtext">
              My main objectives are to create a user-friendly and intuitive
              website that provides a seamless experience for users. I strive to
              deliver high-quality work that is both visually appealing and
              functional.
            </p>
          </div>
        </AboutItem>

        <AboutItem className="col-span-1 xl:row-span-4">
          <div className="rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center">
            <World />
          </div>

          <div>
            <p className="grid-headtext">I can work remotely</p>
            <p className="grid-subtext">
              I enjoy working in a team to contribute my ideas to achieve the
              objectives. And I am always looking for new challenges and
              opportunities.
            </p>
            <a href="#contact">
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </a>
          </div>
        </AboutItem>

        <AboutItem className="xl:col-span-2 xl:row-span-3">
          <img
            src="/assets/grid3.png"
            alt="grid-3"
            className="w-full sm:h-[266px] h-fit object-contain sm:object-cover"
          />

          <div>
            <p className="grid-headtext">My pasion for coding</p>
            <p className="grid-subtext">
              I love to focus on details with the purpose of providing good user
              experiences, adopting an intuitive and attractive design with
              excellent code implementation.
            </p>
          </div>
        </AboutItem>

        <AboutItem className="xl:col-span-1 xl:row-span-2">
          <img
            src="/assets/grid4.png"
            alt="grid-4"
            className="w-full md:h-[226px] sm:h-[276px] h-fit object-cover md:object-top"
          />

          <div className="space-y-2 flex flex-col items-center justify-center">
            <p className="grid-subtext text-center">Contact me</p>
            <div className="copy-container">
              <button onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
                  alt="copy"
                />
              </button>
              <p className="lg:text-xl md:text-base text-base font-medium text-gray_gradient text-white">
                erik.castillo.anzures@gmail.com
              </p>
            </div>
          </div>
        </AboutItem>
      </motion.div>
    </section>
  );
};

export default About;
