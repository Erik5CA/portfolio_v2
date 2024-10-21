import { motion, Variants } from "framer-motion";

const item: Variants = {
  hidden: {
    opacity: 0.1,
    scale: 0.9,
  },
  show: {
    opacity: [0.1, 1],
    scale: [0.9, 1],
    transition: {
      durarion: 5,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.4,
      repeatType: "reverse",
    },
  },
};

const AboutItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.4, once: false }}
      className={className}
    >
      <div className="grid-container">{children}</div>
    </motion.div>
  );
};

export default AboutItem;
