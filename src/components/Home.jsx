import React from "react";
import { Products } from "./Products";

export const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/images/15199.jpg"
          className="card-img"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-around">
          <div className="container">
            <h5 className="card-title display-3 fw-border mb-0 ">
              E.O.S.S - END OF SEASON SALE !!
            </h5>
            <p className="card-text lead fs-2">AVAIL UPTO 80% DISCOUNT.*</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
