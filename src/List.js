import React, { useContext } from "react";
import UserContext from "./UserContext";

const List = () => {
  const userData = useContext(UserContext);
  return (
    <div className="h-screen pt-6 px-8  bg-slate-100 ">
      <h2 className="font-bold text-xl pb-4">
        {" "}
        Travel list of {userData.userName}{" "}
      </h2>
      <div className=" border border-gray-400 p-2">li1 </div>
    </div>
  );
};

export default List;
