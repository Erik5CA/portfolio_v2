export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Freelance",
    pos: "Software Developer Freelance",
    duration: "2023 - Present",
    title:
      "I work as a software developer freelance, focusing on web development and design. I have experience with React, Next.js, TypeScript, Tailwind CSS, and GraphQL. I am proficient in frontend.",
    icon: "/assets/freelance.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Research Institute in Applied Mathematics and Systems",
    pos: "Software Developer",
    duration: "2022 - 2023",
    title: `I designed computer vision algorithms for pest detection using deep learning algorithms for predictive model construction. I designed IoT devices for pest detection and I designed electronic devices for the detection of the passage of pests.`,
    icon: "/assets/iimas.webp",
    animation: "salute",
  },
];
