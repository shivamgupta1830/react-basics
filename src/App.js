import About from "./About";
import "./App.css";
import countries from "./FetchData";
import Home from "./Home";
import List from "./List";
import Navbar from "./Navbar";
import User from "./User";
import { useEffect, useState } from "react";

function App() {
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
    <div className="">
      <Navbar />

      {country ? (
        <div>
          <Home country={country} />
          {/* <About />
          <List />
          <User /> */}
        </div>
      ) : (
        <div className=" p-10 text-center font-bold text-3xl">Loading....</div>
      )}
    </div>
  );
}

export default App;
