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

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Study App",
    desc: "App to create study groups on any topic, with the possibility of joining to create comments and view recent activities of other users. You can perform a search to filter the groups of interest related to the search. It has authentication and user authorization.",
    subdesc:
      "Built with Next.js, Tailwind CSS and Typescript. Using Postgree SQL to handle the data and Prisma ORM to query the data.",
    href: "https://study-app-henna.vercel.app/",
    texture: "/textures/project/proyecto1.png",
    logo: "/assets/project-logo1.svg",
    logoStyle: {
      backgroundColor: "#11E6584D",
      border: "0.2px solid #11E6585D",
      boxShadow: "0px 0px 60px 0px #11E6584D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/next-js.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwind.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.svg",
      },
      {
        id: 4,
        name: "Postgree SQL",
        path: "/assets/postgresql.svg",
      },
      {
        id: 5,
        name: "Prisma ORM",
        path: "/assets/prisma.svg",
      },
    ],
  },
  {
    title: "Weather App",
    desc: "App focused for mobile devices, suitable to keep abreast of the weather in a period of 5 days. Displays temperature, pressure, humidity, wind speed and cloud status. The data obtained comes from the OpenWeather API.",
    subdesc:
      "Users can be sure that the information displayed is correct as it is necessary to grant location permissions to accurately display the weather at their location. Built using React, Typescript and CSS.",
    href: "https://react-app-weather-delta.vercel.app/",
    texture: "/textures/project/proyecto5.webp",
    logo: "/assets/project-logo2.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 3,
        name: "CSS",
        path: "assets/css.svg",
      },
      {
        id: 4,
        name: "Open Weather",
        path: "/assets/weather.png",
      },
    ],
  },
  {
    title: "Spotify Search",
    desc: "An application to search for your favorite artist and see his complete discography. The user can browse through all the albums published by the artist and see the songs that make up the album. It also shows the collaborations between other artists.",
    subdesc:
      "Built using React and CSS. Using Spotify API to get the artist, songs and albums data. Disegned to adapt to all types of devices.",
    href: "https://erik5ca.github.io/Spotify-App/",
    texture: "/textures/project/proyecto2.jpeg",
    logo: "/assets/project-logo3.svg",
    logoStyle: {
      backgroundColor: "#0000005D",
      border: "0.2px solid #1DB954",
      boxShadow: "0px 0px 60px 0px #1DB9545D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 3,
        name: "CSS",
        path: "assets/css.svg",
      },
      {
        id: 4,
        name: "Spotify",
        path: "/assets/project-logo3.svg",
      },
    ],
  },
  {
    title: "Where in the World?",
    desc: "Web to visualize information about the countries of the world. The user can see the following information about the countries: population, native language, region, capital, currency, border and more. In addition to being able to search and filter by continent.",
    subdesc:
      "Designed to be displayed in both dark or light mode and adapt to all types of devices. Built using React and CSS.",
    href: "https://erik5ca.github.io/react-rest-countries/",
    texture: "/textures/project/proyecto3.jpeg",
    logo: "/assets/project-logo4.svg",
    logoStyle: {
      backgroundColor: "#FFECB34D",
      border: "0.2px solid #FFE082",
      boxShadow: "0px 0px 60px 0px #FFE0824D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/javascript.svg",
      },
      {
        id: 3,
        name: "CSS",
        path: "assets/css.svg",
      },
    ],
  },
  {
    title: "Tip Calculator",
    desc: "Web application for those situations where you need to calculate the amount to pay for each person on an account. Just enter the total amount to pay, the number of people and the tip percentage and the app will tell you how much to pay per person.",
    subdesc:
      "Contruidad using React, and with the help of useContext and useReducer to handle the global state of the app and CSS for styling.",
    href: "https://erik5ca.github.io/react-tip-calculator/",
    texture: "/textures/project/proyecto4.jpeg",
    logo: "/assets/project-logo5.svg",
    logoStyle: {
      backgroundColor: "#A57E634D",
      border: "0.2px solid #A57E63",
      boxShadow: "0px 0px 60px 0px #A57E634D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/javascript.svg",
      },
      {
        id: 3,
        name: "CSS",
        path: "assets/css.svg",
      },
    ],
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
