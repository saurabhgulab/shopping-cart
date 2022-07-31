import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Home } from "../Home";
import { Alert } from "react-bootstrap";

export const Login = () => {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleClick(e) {
    setHome(!home);
  }
  function handleLogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    if (!email1 || !password1) {
      setFlag(true);
    } else {
      if (password1 !== pass || email1 !== mail) {
        setFlag(true);
      } else {
        setHome(!home);
        setFlag(false);
      }
    }
  }

  return (
    <>
      {home ? (
        <form onSubmit={handleLogin}>
          <div className="row mt-5">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="text-center strong">Sign In</h2>
                  <div className="container">
                    <div className="row-col">
                      <label for="floatingInput">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail1(e.target.value)}
                      />
                    </div>
                    <div className="row-col">
                      <label for="floatingInput">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword1(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row-col ms-3 mt-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <Button htmlFor="/products" className="m-3" type="submit">
                    Submit
                  </Button>
                  <a htmlFor="/signup" className="m-2 " onClick={handleClick}>
                    Register Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
          {flag && (
            <Alert color="primary" variant="danger">
              Please Fill Correct Details
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </>
  );
};
