import React, { createContext, useReducer, useEffect } from "react";
import { userReducer } from "./userReducer";

const initialState = {
  users: [],
  firedUsers: JSON.parse(localStorage.getItem("firedUsers")) || [],
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    localStorage.setItem("firedUsers", JSON.stringify(state.firedUsers));
  }, [state.firedUsers]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
