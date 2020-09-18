import React, { useContext } from "react";
import Auth from "./auth";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/Global";
import { Button } from "antd";

export default function Navbar() {
  const { user } = useContext(GlobalContext);

  return (
    <nav className="navbar">
      <Link to="/">
        <p className="logo">Sakhi</p>
      </Link>
      <ul>
        <li>
          {user._id === undefined ? (
            <Auth />
          ) : (
              <Link to="/dashboard">
                <Button size="large" type="primary">
                  <span style={{textTransform: "Capitalize"}}>{user.name.split(" ")[0]}</span>
                </Button>
              </Link>
            )}
        </li>
      </ul>
    </nav>
  );
}
