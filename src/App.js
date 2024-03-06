import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./About";
import "./App.css";

import List from "./List";
import Navbar from "./Navbar";
import User from "./User";

import Body from "./Body";
import Error from "./Error";

function App() {
  // const [country, setCountry] = useState(null);

  // useEffect(() => {
  //   const countriesList = async () => {
  //     const data = await fetch("https://restcountries.com/v3.1/all");
  //     const repsonse = await data.json();

  //     setCountry(repsonse);
  //   };
  //   countriesList();
  // }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
    errorElement: <Error />,
  },
]);

export { App, appRouter };
