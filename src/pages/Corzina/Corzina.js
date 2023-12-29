import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Corzina = () => {
  const cartItems = useSelector((state) => {
    return state.cart.cart_items;
  });
  const dispatch = useDispatch();
  const handleRemove = (cart_id) => (e) => {
    e.preventDefault();
    dispatch({ type: "REMOVE_CART", payload: cart_id });
  };

  return (
    <>
      <div className="container p-5 my-5 mx-auto">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="">
            <tr>
              <td>S.No</td>
              <td>Product.image</td>
              <td>Product.Name</td>
              <td>Product.Price</td>
              <td>Quantity</td>
              <td>Total Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        style={{ height: "100px" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={handleRemove(item.cart_id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Corzina;
