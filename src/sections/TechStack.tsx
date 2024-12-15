import TechStackItem from "../components/TechStackItem";

const techStack = [
  {
    name: "React",
    logo: "/assets/techs/react.svg",
  },
  {
    name: "Next.js",
    logo: "/assets/techs/next-js.svg",
  },
  {
    name: "Typescript",
    logo: "/assets/techs/typescript.svg",
  },
  {
    name: "Javascript",
    logo: "/assets/techs/javascript.svg",
  },
  {
    name: "CSS",
    logo: "/assets/techs/css.svg",
  },
  {
    name: "HTML",
    logo: "/assets/techs/html.svg",
  },
  {
    name: "Tailwind",
    logo: "/assets/techs/tailwind.svg",
  },
  {
    name: "Python",
    logo: "/assets/techs/python.svg",
  },
  {
    name: "PostgreSQL",
    logo: "/assets/techs/postgresql.svg",
  },
  {
    name: "Mongo",
    logo: "/assets/techs/mongo.svg",
  },
  {
    name: "Redux",
    logo: "/assets/techs/redux.svg",
  },
  {
    name: "React Router",
    logo: "/assets/techs/react-router.svg",
  },
  {
    name: "Node.js",
    logo: "/assets/techs/node.svg",
  },
  {
    name: "Express",
    logo: "/assets/techs/express.svg",
  },
];

const TechStack = () => {
  return (
    <section className="c-space my-20">
      <p className="head-text">Tech Stack</p>

      <div className="flex flex-wrap items-center justify-center mt-12 gap-5 w-full">
        {techStack.map((item, index) => (
          <TechStackItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
