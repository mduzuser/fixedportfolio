//rrd imports
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

//components
import { NavLinks, ToggleMenu } from "./";
//icons
import { FiSun } from "react-icons/fi";
import { PiMoon } from "react-icons/pi";

//local stroge
const themeFromLocalStorge = () => {
  return localStorage.getItem("theme") || "cyberpunk";
};

function Navbar() {
  const [theme, setTheme] = useState(themeFromLocalStorge());
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme == "cyberpunk" ? "dim" : "cyberpunk";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header>
      {isOpen && <ToggleMenu />}
      <div className="align-elements navbar relative ">
        <div className="navbar-start">
          <Link to={"/"} className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-600 rounded-full"></div>
            <div>
              <p className="text-2xl">
                <span className="text-4xl font-bold ">md</span>uzuser
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-end flex items-center gap-5">
          <ul className="items-center gap-5 hidden md:flex">
            <NavLinks />
          </ul>

          <label className="swap swap-rotate ">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleTheme} />

            {/* sun icon */}
            <FiSun className="swap-off h-6 w-6 fill-current" />

            {/* moon icon */}
            <PiMoon className="swap-on h-6 w-6 fill-current" />
          </label>

          <label className="btn btn-circle swap swap-rotate md:hidden ">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleMenu} />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
