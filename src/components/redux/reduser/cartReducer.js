import React from "react";

const initialData = {
  cart_items: [],
};

const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, cart_items: [...state.cart_items, action.payload] };
    }
    case "REMOVE_CART": {
      return {
        ...state,
        cart_items: state.cart_items.filter(
          (item) => item.cart_id !== action.payload
        ),
      };
    }
    case "UPDATE_CART": {
      const new_item = action.payload;
      return {
        ...state,
        cart_items: state.cart_items.map((cart_item) => {
          if (cart_item.cart_id === new_item.cart_id) {
            return new_item;
          } else {
            return cart_item;
          }
        }),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
