//to add item to cart
// import addCart from "./reducers/handleCart";
// import { combineReducers } from "redux";

// export const rootReducers = combineReducers({
//   addCart,
// });

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//to delete item from cart

export const deleteCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
