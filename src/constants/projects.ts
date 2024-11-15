export const myProjects = [
  {
    title: "Study App",
    desc: "App to create study groups on any topic, with the possibility of joining to create comments and view recent activities of other users. You can perform a search to filter the groups of interest related to the search. It has authentication and user authorization.",
    subdesc:
      "Built with Next.js, Tailwind CSS and Typescript. Using Postgree SQL to handle the data and Prisma ORM to query the data.",
    href: "https://study-app-henna.vercel.app/",
    texture: "/project/proyecto1.png",
    logo: "/project/project-logo1.svg",
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
        path: "/assets/techs/next-js.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/techs/tailwind.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/techs/typescript.svg",
      },
      {
        id: 4,
        name: "Postgree SQL",
        path: "/assets/techs/postgresql.svg",
      },
      {
        id: 5,
        name: "Prisma ORM",
        path: "/assets/techs/prisma.svg",
      },
    ],
  },
  {
    title: "Weather App",
    desc: "App focused for mobile devices, suitable to keep abreast of the weather in a period of 5 days. Displays temperature, pressure, humidity, wind speed and cloud status. The data obtained comes from the OpenWeather API.",
    subdesc:
      "Users can be sure that the information displayed is correct as it is necessary to grant location permissions to accurately display the weather at their location. Built using React, Typescript and CSS.",
    href: "https://react-app-weather-delta.vercel.app/",
    texture: "/project/proyecto5.webp",
    logo: "/project/project-logo2.svg",
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
        path: "/assets/techs/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/techs/typescript.svg",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/techs/css.svg",
      },
      {
        id: 4,
        name: "Open Weather",
        path: "/assets/techs/weather.png",
      },
    ],
  },
  {
    title: "Spotify Search",
    desc: "An application to search for your favorite artist and see his complete discography. The user can browse through all the albums published by the artist and see the songs that make up the album. It also shows the collaborations between other artists.",
    subdesc:
      "Built using React and CSS. Using Spotify API to get the artist, songs and albums data. Disegned to adapt to all types of devices.",
    href: "https://erik5ca.github.io/Spotify-App/",
    texture: "/project/proyecto2.jpeg",
    logo: "/project/project-logo3.svg",
    logoStyle: {
      backgroundColor: "#1DB9545D",
      border: "0.2px solid #1DB954",
      boxShadow: "0px 0px 60px 0px #1DB9545D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/techs/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/techs/typescript.svg",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/techs/css.svg",
      },
      {
        id: 4,
        name: "Spotify",
        path: "/assets/techs/spotify.svg",
      },
    ],
  },
  {
    title: "Where in the World?",
    desc: "Web to visualize information about the countries of the world. The user can see the following information about the countries: population, native language, region, capital, currency, border and more. In addition to being able to search and filter by continent.",
    subdesc:
      "Designed to be displayed in both dark or light mode and adapt to all types of devices. Built using React and CSS.",
    href: "https://erik5ca.github.io/react-rest-countries/",
    texture: "/project/p5.jpeg",
    logo: "/project/project-logo4.svg",
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
        path: "/assets/techs/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/techs/javascript.svg",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/techs/css.svg",
      },
    ],
  },
  {
    title: "Tip Calculator",
    desc: "Web application for those situations where you need to calculate the amount to pay for each person on an account. Just enter the total amount to pay, the number of people and the tip percentage and the app will tell you how much to pay per person.",
    subdesc:
      "Contruidad using React, and with the help of useContext and useReducer to handle the global state of the app and CSS for styling.",
    href: "https://erik5ca.github.io/react-tip-calculator/",
    texture: "/project/p4.jpeg",
    logo: "/project/project-logo5.svg",
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
        path: "/assets/techs/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/techs/javascript.svg",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/techs/css.svg",
      },
    ],
  },
  {
    title: "Mern Eats",
    desc: "Web application to help you find restaurants in your city. The user can filter restaurants by cuisine, delivery price and estimated delivery time. The user can order the food and pay with a credit card. The app also lets the user create a restaurant to manage the orders and payments.",
    subdesc:
      "Built using MERN stack. Using MongoDB to store the data, Auth0 for authentication and Stripe for payments. Styled with Tailwind CSS.",
    href: "https://mern-food-app-frontend-2qzp.onrender.com",
    texture: "/project/proyecto6.jpeg",
    logo: "/project/project-logo6.svg",
    logoStyle: {
      backgroundColor: "#f973164D",
      border: "0.2px solid #f97316",
      boxShadow: "0px 0px 60px 0px ##f973164D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/techs/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/techs/typescript.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/techs/tailwind.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/techs/mongo.svg",
      },
      {
        id: 5,
        name: "Stripe",
        path: "/assets/techs/stripe.svg",
      },
      {
        id: 6,
        name: "Auth0",
        path: "/assets/techs/auth0.svg",
      },
    ],
  },
  {
    title: "Threads Clone",
    desc: "Web application to help you organize your thoughts and ideas. The user can create a thread, add comments. The user can also create a community to share ideas with other users. Fully functional with authentication and user authorization and full responsiveness.",
    subdesc:
      "Build using Next.js, MongoDB, Tailwind CSS and Typescript. Authentication with Clerk and handle uploads images with Uploadthing.",
    href: "https://threads-app-one-rust.vercel.app/",
    texture: "/project/proyecto7.jpeg",
    logo: "/project/project-logo7.svg",
    logoStyle: {
      backgroundColor: "#6C47FF4D",
      border: "0.2px solid #6C47FF",
      boxShadow: "0px 0px 60px 0px #6C47FF4D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/techs/next-js.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/techs/tailwind.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/techs/typescript.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/techs/mongo.svg",
      },
      {
        id: 5,
        name: "Clerk",
        path: "/assets/techs/clerk.svg",
      },
      {
        id: 6,
        name: "Uploadthing",
        path: "/assets/techs/uploadthing.svg",
      },
    ],
  },
];
