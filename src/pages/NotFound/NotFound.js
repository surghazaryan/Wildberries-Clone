import React from "react";
import Img from "../../components/images/no-product-fount.png";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="container not-found">
      <div className="fw-5 text-danger py-5">
        <img src={Img} />
        <h3> Page Not Found</h3>
      </div>
    </div>
  );
};

export default NotFound;
