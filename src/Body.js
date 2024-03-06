import React, { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const countriesList = async () => {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const repsonse = await data.json();

      setCountry(repsonse);
    };
    countriesList();
  }, []);

  return (
    <div>
      {country ? (
        <div>
          <Card country={country} />
        </div>
      ) : (
        <div className=" bg-slate-100 h-screen p-10 text-center font-bold text-3xl">
          Loading....
        </div>
      )}
    </div>
  );
};

export default Body;
