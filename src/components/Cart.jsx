import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { deleteCart } from "../redux/action";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";

export const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(deleteCart(item));
  };
  const inputRef = useRef(null);
  function Button(props) {
    let { action, title } = props;
    return <button onClick={action}>{title}</button>;
  }
  const [count, setCount] = useState(1);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    if (count == 1) {
      handleClose();
    } else {
      setCount(count - 1);
    }
  };
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                ₹ {Math.floor(cartItem.price * 80)} /-
              </p>

              <div>
                <div class="count"></div>
                <div class="buttons">
                  <Button title={" - "} action={decrementCount} />
                  {count}
                  <Button title={" + "} action={incrementCount} />
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row-3">Your Cart is Empty</div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/register"
            ref={inputRef}
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed to Buy
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};
