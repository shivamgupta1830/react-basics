import React, { useContext } from "react";
import UserContext from "./UserContext";

const UserDetails = () => {
  const userData = useContext(UserContext);
  return (
    <div className=" w-2/3 p-6 flex flex-col gap-4 text-xl font-semibold border border-gray-400 m-auto rounded-md">
      <h4>Username: {userData.userName}</h4>
      <h4>Age: {userData.userAge}</h4>
      <h4>Email: {userData.userEmail}</h4>
    </div>
  );
};

export default UserDetails;
