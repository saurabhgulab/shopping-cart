//to add item to cart
// import addCart from "./reducers/handleCart";
// import { combineReducers } from "redux";

// export const rootReducers = combineReducers({
//   addCart,
// });
// const checkProduct = (product) => {
//   else {
//     dispatch(addCart(product));
//   }
// };

export const addCart = (product) => {
  if (product > 1) {
    alert("Product already added to cart.");
  } else {
    return {
      type: "ADDITEM",
      payload: product,
    };
  }
};

//to delete item from cart

export const deleteCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
