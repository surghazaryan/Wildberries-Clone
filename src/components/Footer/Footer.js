import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-4 text-center">
        <div className="parent-link ">
          <Link to="/" className="text-uppercase">
            privacy policy
          </Link>
          <div className="vert-line"></div>
          <Link to="/" className="text-uppercase">
            term of service
          </Link>
          <div className="vert-line"></div>
          <Link to="/" className="text-uppercase">
            About Wildberries
          </Link>
        </div>
        <span className="text-white copyright-text text-manrope fs-14 fw-3">
          &copy; 2023 Mutasim. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
