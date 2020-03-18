import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full flex-wrap py-4 lg:px-16 px-4 bg-blue-800 z-10 text-gray-300 fixed top-0 left-0 w-full">
      <div>
        {/* className={`${isOpen ? "w-full" : "w-auto"}`} */}
        <h1 className="text-3xl font-semibold font-serif">Corona Update</h1>
      </div>

      <div className={`block ${isOpen ? "lg:hidden" : "block"}  lg:hidden`}>
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
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end transition-all duration-1000 ease-in-out  ${
          isOpen ? "block h-screen text-center lg:h-auto" : "hidden"
        }`}
      >
        <ul className="p-2 lg:flex">
          <li className="block mt-4 lg:mt-0 lg:mr-4 hover:underline">
            <a className="font-hairline text-xl" href="home">
              Link 1
            </a>
          </li>
          <li className="block mt-4 lg:mt-0 lg:mr-4 hover:underline ">
            <a className="font-hairline text-xl" href="home">
              Link 2
            </a>
          </li>
          <li className="block mt-4 lg:mt-0 lg:mr-4 hover:underline">
            <a className="font-hairline text-xl" href="home">
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
