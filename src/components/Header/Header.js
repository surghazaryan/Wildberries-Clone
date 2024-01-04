import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import NavBar from "../Navbar/NavBar";

const Header = () => {
  return (
    <>
      <header className="header text-white" id='top'>
        <div className="container">
          <div className="header-cnt">
            <div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
              <div className="header-cnt-top-l">
                <ul className="flex top-links align-center">
                  <li className="currency">USD</li>
                  <li className="vert-line"></li>
                  <li className="location">United States</li>
                  <li className="vert-line"></li>
                  <li className="flex align-center">
                    <span className="fs-13">Follow us on</span>
                  </li>
                </ul>
              </div>
              <div className="header-cnt-top-r">
                <ul className="top-links flex align-center">
                  <li>
                    <Link to="/" className="top-link-itm">
                      <span className="top-link-itm-txt">Support</span>
                    </Link>
                  </li>
                  <li className="vert-line"></li>
                  <li>
                    <Link to="/">
                      <span className="top-link-itm-txt">Register</span>
                    </Link>
                  </li>
                  <li className="vert-line"></li>
                  <li>
                    <Link to="/">
                      <span className="top-link-itm-txt">Log in</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-cnt-bottom">
              <NavBar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
