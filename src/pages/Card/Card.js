import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img
            src={item.images[0]}
            alt=""
            className="card-img-top"
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title text-truncate">{item.title}</h5>
            <h6 className="card-title">{item.price}</h6>
            <Link to={`/product/${item.id}`} className="btn btn-warning w-100">
              view
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
