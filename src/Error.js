import React from "react";
import Navbar from "./Navbar";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <Navbar />
      <div className="text-center font-bold text-4xl pt-20 pb-10">
        Oops, something went wrong !!!
      </div>
      <h3 className="text-center font-bold text-2xl">
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
