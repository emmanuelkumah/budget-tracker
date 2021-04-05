import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { Button } from "../Button/Button";
import "./NavBar.css";
import { IconContext } from "react-icons/lib";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //close mobile menu
  const closeMobileMenu = () => setClick(false);

  //show if width is more than 960px
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  //Dont show button when you resize the screen
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              BUDGET.LY
              <GiTakeMyMoney className="navbar-icon" />
            </Link>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">Sign Up</Button>
                  </Link>
                ) : (
                  <Link to="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
            <div className="navbar-logo" onClick={() => setClick(!click)}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
