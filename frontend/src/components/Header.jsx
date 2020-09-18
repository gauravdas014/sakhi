import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/Global";

function Header() {
  const { user } = React.useContext(GlobalContext);
  return (
    <header className="header">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell large-4">
            <NavLink to="/" exact>
              <span className="header__logo">
                सखी
              </span>
            </NavLink>
          </div>
          <div className="cell large-8">
            <div className="navbar">
              <ul className="navbar__item-container">
                <NavLink
                  to="/"
                  className="navbar__item"
                  activeClassName="navbar__item--active"
                >
                  Store
                </NavLink>
                <NavLink
                  to="/myjobs"
                  className="navbar__item"
                  activeClassName="navbar__item--active"
                >
                  Jobs
                </NavLink>
                {user._id === undefined ? (
                  <a
                    href="/auth"
                    className="navbar__item"
                    activeClassName="navbar__item--active"
                  >
                    Login
                  </a>
                ) : (
                  <NavLink to="/dashboard">
                    <span style={{ textTransform: "Capitalize" }}>
                      {user.name.split(" ")[0]}
                    </span>
                  </NavLink>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
