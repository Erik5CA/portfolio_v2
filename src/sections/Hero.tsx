import Button from "../components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="min-h-screen relative w-full flex flex-col justify-center"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 1 }}
        className="w-full h-full mx-auto flex flex-col  c-space gap-3"
      >
        <p className="sm:text-4xl text-3xl font-medium text-white text-center font-generalsans">
          Hi there, I'm Erik <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Software Developer</p>
      </motion.div>

      <div className="w-full h-full absolute inset-0 flex flex-col justify-center items-center -z-10 p-5">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 5, delay: 1 }}
          src="/assets/hero1.png"
          alt="sd"
          className="rounded-3xl opacity-40 w-full h-full object-cover"
          width={100}
          height={100}
        />
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
