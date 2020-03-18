import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-800 text-center py-2 text-white font-semibold flex flex-col items-center justify-center">
      <p className="flex items-center">
        {`</> with`}&nbsp;
        <span className="text-red-600 text-4xl">&hearts;</span>&nbsp; by&nbsp;
        <a
          className="text-green-500"
          href="https://www.facebook.com/a1ubkh4n"
          target="_blank"
          rel="noopener noreferrer"
        >
          Md Ayub Khan
        </a>
      </p>

      <span className="block w-full">&copy; {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
