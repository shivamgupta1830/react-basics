import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Navbar = () => {
  const userData = useContext(UserContext);
  console.log(userData);

  return (
    <div className="  bg-gradient-to-t from-lime-200 to-lime-400 flex justify-between items-center py-4 px-8 text-black">
      <div>
        <h1 className="text-4xl font-extrabold">Cont.</h1>
      </div>
      <div>
        <ul className="flex justify-around items-center gap-5 font-semibold text-lg">
          <li className="hover:bg-lime-500 p-2 rounded-md cursor-pointer">
            <Link to="/home">Home 🏠</Link>
          </li>
          <li className="hover:bg-lime-500 p-2 rounded-md cursor-pointer">
            <Link to="/about">About 📃</Link>
          </li>
          <li className="hover:bg-lime-500 p-2 rounded-md cursor-pointer">
            <Link to="/list"> List ➕</Link>
          </li>
          <li className="hover:bg-lime-500 p-2 rounded-md cursor-pointer">
            <Link to="/user"> {userData.userName} 👤</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
