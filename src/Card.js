import React from "react";

const Card = ({ country }) => {
  const countryList = country;

  return (
    <div className="py-12 px-24 flex justify-around gap-10 flex-wrap  bg-slate-100 ">
      {countryList.map((country) => {
        const countryName = country.name.common;
        const capitalName = country.capital;
        const flagUrl = country.flags.png;
        return (
          <div
            className="w-2/12 h-[250px] border-2  bg-lime-100 border-lime-400 text-center rounded-lg p-2 shadow-md hover:scale-105 transition-all"
            key={countryName}
          >
            <img
              className="h-[100px] w-full"
              src={flagUrl}
              alt={countryName}
            ></img>
            <h3 className="font-medium py-2 text-lg">{countryName}</h3>
            <h5 className="font-normal  bg-lime-400 p-2 rounded-lg w-10/12 m-auto">
              {capitalName}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
