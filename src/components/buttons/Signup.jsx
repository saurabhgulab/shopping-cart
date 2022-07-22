import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Login } from "./Login";

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
  integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>;

<script src="service.js"></script>;

export const Signup = () => {
  const [type, setType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // const [country, setCountry] = useState("");
  // const [state, setState] = useState("");
  // const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleClick(e) {
    setLogin(!login);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !address ||
      // !country ||
      // !state ||
      // !city ||
      !pincode ||
      !mobile ||
      !fax ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Type", JSON.stringify(type));
      localStorage.setItem("First Name", JSON.stringify(firstName));
      localStorage.setItem("Last Name", JSON.stringify(lastName));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Address", JSON.stringify(address));
      // localStorage.setItem("Country", JSON.stringify(country));
      // localStorage.setItem("State", JSON.stringify(state));
      // localStorage.setItem("City", JSON.stringify(city));
      localStorage.setItem("Pincode", JSON.stringify(pincode));
      localStorage.setItem("Mobile", JSON.stringify(mobile));
      localStorage.setItem("Fax", JSON.stringify(fax));
      localStorage.setItem("Phone", JSON.stringify(phone));
      localStorage.setItem("First Name", JSON.stringify(fax));
      localStorage.setItem("First Name", JSON.stringify(fax));
    }
  }

  return (
    <>
      {login ? (
        <form onSubmit={handleSubmit}>
          <div className="row mt-5">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <h2 className="text-center strong">Sign Up</h2>
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <div className="form-check g-col-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="individual"
                                onChange={(e) => setType(e.target.value)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Individual
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-check g-col-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="government"
                                onChange={(e) => setType(e.target.value)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Government
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-check g-col-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="enterprise"
                                onChange={(e) => setType(e.target.value)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Enterprise
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <label for="floatingInput">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            placeholder="First Name"
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="col">
                          <label for="floatingInput">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder="Last Name"
                            required
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="container">
                        <div className="row-col">
                          <label for="floatingInput">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="row-col">
                          <label for="floatingInput">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                            required
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="container">
                        <div className="row">
                          <div className="col" id="info-container">
                            <label for="floatingInput">Country</label>
                            <select
                              className="form-select"
                              // onChange={(e) => setCountry(e.target.value)}
                              id="countries"
                            >
                              <option value="">Country</option>
                            </select>
                          </div>
                          <div className="col">
                            <label for="floatingInput">State</label>
                            <select
                              className="form-select"
                              // onChange={(e) => setState(e.target.value)}
                              id="states"
                            >
                              <option value="">State</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <label for="floatingInput">City</label>
                            <select
                              className="form-select"
                              // onChange={(e) => setCity(e.target.value)}
                              id="city"
                            >
                              <option value="">City</option>
                            </select>
                          </div>
                          <div className="col">
                            <label for="floatingInput">Pincode</label>
                            <input
                              type="text"
                              className="form-control"
                              id="pincode"
                              placeholder="Pincode"
                              required
                              onChange={(e) => setPincode(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <label for="floatingInput">Mobile Number</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="mobilenumber"
                            placeholder="Mobile Number"
                            required
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <label for="floatingInput">Fax</label>
                            <input
                              type="text"
                              className="form-control"
                              id="fax"
                              placeholder="Fax"
                              required
                              onChange={(e) => setFax(e.target.value)}
                            />
                          </div>
                          <div className="col">
                            <label for="floatingInput">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="Phone"
                              required
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row-col">
                          <label for="">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="row-col">
                          <label for="floatingInput">Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <Button className="m-3" type="submit">
                      Submit
                    </Button>
                    <a htmlFor="/login" className="m-2" onClick={handleClick}>
                      Login?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {flag && (
            <Alert color="primary" variant="danger">
              Please Fill Details
            </Alert>
          )}
        </form>
      ) : (
        <Login />
      )}
    </>
  );
};
