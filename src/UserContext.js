import { createContext } from "react";

const UserContext = createContext({
  userName: "Shivam Gupta",
  userAge: 29,
  userEmail: "shivamgupta1830@gmail.com",
});

export default UserContext;
