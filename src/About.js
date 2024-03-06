import React, { useContext } from "react";
import UserContext from "./UserContext";

const About = () => {
  const userData = useContext(UserContext);
  return (
    <div className="h-screen pt-6 px-8 text-center bg-slate-100">
      <p className="text-xl font-normal leading-8">
        Hi,
        <span className="text-blue-900 font-bold bg-lime-200 p-1 rounded-md ">
          {userData.userName}
        </span>
        <br></br>
        Welcome to "Global Insights" – your passport to the world! Global
        Insights is your one-stop destination for discovering essential
        information about countries across the globe. Whether you're planning
        your next adventure, researching for business opportunities, or simply
        curious about the world, our website provides comprehensive and
        up-to-date data on diverse nations. Explore a wealth of information
        effortlessly categorized by continent, region, or specific country. From
        bustling metropolises to serene landscapes, each nation is richly
        portrayed through concise yet informative snapshots.
      </p>
    </div>
  );
};

export default About;
