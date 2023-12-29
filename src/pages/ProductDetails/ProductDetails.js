import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await fetch(`https://dummyjson.com/products/${id}`).then(
        (r) => r.json()
      );
      setProduct(data);
    })();
  }, [id]);

  const handleSumbmit = (e) => {
    e.preventDefault();
    let cart_item = { ...product, cart_id: Date.now() };
    dispatch({ type: "ADD_TO_CART", payload: cart_item });
  };

  return (
    <>
      <div className="container mx-auto my-3">
        <div className="row">
          <div className="col-md-6 p-5">
            {product && product.images && (
              <img src={product.images[0]} className="w-100" />
            )}
            <div className="d-flex">
              {product &&
                product.images &&
                product.images.map((img,i) => {
                  return (
                    <div key={i}>
                      <img src={img} style={{ height: "70px" }}/>;
                    </div>
                  )
                })}
               
            </div>
          </div>
          <div className="col-md-6 p-5">
            <h2 className="mt-5">{product.title}</h2>
            <h3 className="mt-5">${product.price}</h3>
            <p className="mt-5">Product Details{product.description}</p>
            <h3 className="mt-5">In Srock: {product.stock}</h3>
            <button
              onClick={handleSumbmit}
              className="border-0 btn btn-warning"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
