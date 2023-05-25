import React, { useState } from "react";
import AuthAccess from "../dataAccess/AuthAccess";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [signInData, setSignInData] = useState({ email: "", password: "" });

  const signIn = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSignInData(
      (prevState) => ({
        ...prevState,
        [name]: value,
      }),
      [signIn]
    );
  };

  const signInHandeler = async (e) => {
    e.preventDefault();
    const loginResult = await AuthAccess.signin(signInData);
    console.log(loginResult);
    // if (signInData) {
    //   navigate("/");
    //   window.location.reload();
    // }
  };

  console.log(signInData);

  return (
    <div className="col-md-12 d-flex align-items-center justify-content-center">
      <div className="card">
        <form className="" onSubmit={(e) => signInHandeler(e)}>
          <div className="card-body">
            <h3 className="">Sign In</h3>
            <div className="text-center">
              Already registered? <span className="link-primary">Sign In</span>
            </div>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={(e) => signIn(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => signIn(e)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
