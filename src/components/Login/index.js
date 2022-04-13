import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="m-5 md">
      <h1 className="d-flex justify-content-center mb-5">LOGIN</h1>
      <form>
        <div className="mb-3 d-flex justify-content-center">
          <input type="email" className="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <input type="password" className="form" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button className="button rounded-pill">SIGN IN</button>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <h5 className="h5">
            DON'T HAVE AN ACCOUNT?
            <a className="h5" href="#">
              SIGN UP
            </a>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
