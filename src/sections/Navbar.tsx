import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ toggleMenu }: { toggleMenu?: () => void }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li" onClick={toggleMenu}>
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Erik Castillo
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="toggle menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="menu"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}
        // onClick={toggleMenu}
      >
        <nav className="p-5">
          <NavItems toggleMenu={toggleMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
