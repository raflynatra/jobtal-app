import React, { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userData, setUserData] = useState({});
  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  );
};
