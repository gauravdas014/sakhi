import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <header className="header">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-4">
              <span className="header__logo">सखी</span>
            </div>
            <div className="cell large-8">
              <div className="navbar">
                <ul className="navbar__item-container">
                  <NavLink to="/store" className="navbar__item" activeClassName="navbar__item--active">
                    Store
                  </NavLink>
                  <NavLink to="/jobs" className="navbar__item" activeClassName="navbar__item--active">
                    Jobs
                  </NavLink>
                  <NavLink to="/login" className="navbar__item" activeClassName="navbar__item--active">
                    Login
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;