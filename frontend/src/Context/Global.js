import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const u = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(u ?? {});

  const token = localStorage.getItem("x-access-token");
  const verifyToken = (tkn) => {
    // console.log("verifying token");
    axios({
      method: "get",
      url: "/api/user/" + user.email,
      headers: {
        "x-access-token": tkn,
      },
    })
      .then((res) => {
        console.log("Auth State: ", res.data);
        if (res.data.auth) {
          setIsAuthenticated(true);
          setUser(res.data.user);
        } else setIsAuthenticated(false);
      })
      .catch((err) => {
        console.error(err);
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
