import React from "react";

export const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>We’d love to hear from you</h2>
          <hr />
          <p>
            Whether you’re curious about features, a free trial, or even
            press—we’re ready to answer any and all questions.
          </p>
          <hr />
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">
                How satisfied are you with our services?
              </label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                Your Feedback will help us grow.
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button className="btn btn-outline-primary mt-5">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md 5"></div>
      </div>
    </div>
  );
};
