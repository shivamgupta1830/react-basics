import React from "react";

const Navbar = () => {
  return (
    <div className="  bg-gradient-to-t from-lime-200 to-lime-400 flex justify-between items-center py-4 px-8 text-black">
      <div>
        <h1 className="text-4xl font-extrabold">Cont.</h1>
      </div>
      <div>
        <ul className="flex justify-around items-center gap-5 font-semibold text-lg">
          <li className="hover:bg-lime-400 p-2 rounded-md cursor-pointer">
            Home 🏠
          </li>
          <li className="hover:bg-lime-400 p-2 rounded-md cursor-pointer">
            About 📃
          </li>
          <li className="hover:bg-lime-400 p-2 rounded-md cursor-pointer">
            List ➕
          </li>
          <li className="hover:bg-lime-400 p-2 rounded-md cursor-pointer">
            User 👤
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
