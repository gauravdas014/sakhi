import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    test: { type1Count: 0, type2Count: 0, type3Count: 0 },
    testCompleted: []
  });

  const token = localStorage.getItem("x-access-token");
  const verifyToken = (tkn) => {
    // console.log("verifying token");
    axios({
      method: "get",
      url: "/me",
      headers: {
        "x-access-token": tkn,
      },
    })
      .then((res) => {
        // console.log("Auth State: ", res.data._doc);
        if (res.data.auth) {
          setIsAuthenticated(true);
          setUser(res.data._doc);
        } else setIsAuthenticated(false);
      })
      .catch((err) => {
        setIsAuthenticated(false);
      });
  };

  useEffect(() => {
    verifyToken(token);
    const interval = setInterval(() => {
      verifyToken(token);
    }, 1000 * 60 * 10);
    return () => {
      clearInterval(interval);
    };
  }, [token]);
  return (
    <GlobalContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
