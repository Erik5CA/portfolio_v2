const Footer = () => {
  return (
    <section className="c-space pt-7 pb-2 border-t border-black-300 flex items-center justify-between flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>© 2024 Erik Castillo</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/Erik5CA"
          target="_blank"
          rel="noreferrer"
          className="social-icon hover:scale-110 transition-all ease-in-out duration-150"
        >
          <img
            src="/assets/techs/github.svg"
            alt="github"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/erik-castillo-b48b12239/"
          target="_blank"
          rel="noreferrer"
          className="social-icon hover:scale-110 transition-all ease-in-out duration-150"
        >
          <img
            src="/assets/techs/linkedin.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
