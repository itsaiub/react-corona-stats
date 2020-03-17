import React from "react";

const Error = ({ code = "", message = "Something happened to the server" }) => {
  return (
    <div className="border rounded text-center m-4 w-1/4 h-56 flex flex-col justify-center items-center shadow-lg p-4 text-red-600 bg-white">
      <h2 className="font-sans  text-xl font-bold">
        {code === "" ? "😢" : code}
      </h2>
      <hr className={`w-full ${code === "" ? "hidden" : "block"}`} />
      <h1
        className="font-serif text-sm font-bold capitalize
      mt-4"
      >
        {code === "" ? "Sorry! No data found." : message}
      </h1>
    </div>
  );
};

export default Error;
