import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="m-5 md">
      <h1 className="d-flex justify-content-center mb-5">CREATE ACCOUNT</h1>
      <form>
        <div className="mb-3 d-flex justify-content-center">
          <input type="text" className="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <input type="email" className="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <input type="password" className="form" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button className="button rounded-pill">SIGN UP</button>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <h5 className="h5">
            ALREADY HAVE AN ACCOUNT?
            <a className="h5" href="#">
              SIGN IN
            </a>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Register;
