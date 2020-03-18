import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as CoronaLogo } from "./assets/corona-logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full flex-wrap py-2 md:px-16 px-4 bg-blue-800 z-10 text-gray-300 fixed top-0 left-0 w-full">
      <div className="flex flex-row items-center">
        {/* className={`${isOpen ? "w-full" : "w-auto"}`} */}
        <CoronaLogo fill="red" width="50px" height="50px" />

        <h1 className="text-xl font-semibold font-serif mx-1">
          <Link to="/">Corona Update</Link>
        </h1>
      </div>

      <div className={`block ${isOpen ? "md:hidden" : "block"}  md:hidden`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full flex-grow md:flex md:items-center md:w-auto md:justify-end transition-all duration-1000 ease-in-out  ${
          isOpen ? "block h-screen text-center md:h-auto" : "hidden"
        }`}
      >
        <ul className="p-2 md:flex">
          <li className="block mt-4 px-2 py-1 md:mt-0 md:mr-4">
            <NavLink
              className="font-hairline text-sm font-medium py-1 border-blue-800 border-b-2 hover:border-green-500"
              activeStyle={{ borderColor: "#48bb78" }}
              to="/chart"
            >
              Chart
            </NavLink>
          </li>
          {/* <li className="block mt-4 md:mt-0 md:mr-4 hover:underline ">
            <a className="font-hairline text-xl" href="home">
              Link 2
            </a>
          </li>
          <li className="block mt-4 md:mt-0 md:mr-4 hover:underline">
            <a className="font-hairline text-xl" href="home">
              Link 3
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
