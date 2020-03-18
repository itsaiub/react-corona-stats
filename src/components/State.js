import React from "react";
import { formatDateAndTime } from "../utils";
import Card from "./Card/Card";
import Loading from "./Loading/Loading";
import Error from "./Error";

const State = ({ title = "", data, loading, error }) => {
  console.log(error);

  if (error) {
    return (
      <Error code={error && error.code} message={error && error.message} />
    );
  }

  return (
    <div className="md:px-0 px-2 flex flex-col text-center items-center justify-center">
      <h1
        className={`${
          title === "" ? "hidden" : "block"
        } text-2xl md:text-3xl font-semibold font-serif mt-10 text-center`}
      >
        {title}
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <p className="text-blue-600 mt-1 ">
            Last updated:&nbsp;
            {formatDateAndTime(new Date(data.lastUpdate), "d-M-y h:m:s:t")}
          </p>
          {data.confirmed !== undefined && <Card data={data} />}
        </>
      )}
    </div>
  );
};

export default State;
