import React from "react";
import { Link } from "react-router-dom";
import { banner2, logo, person } from "../../../assets";
import { Navbar } from "../../../components";
import "./Login.css";

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="left-container">
        <div className="auth-container">
          <div className="auth-form">
            <h1>Sign In</h1>
            <h3>Login to your EasyRecruit Account</h3>
            <form className="form">
              <div className="form-group">
                <div>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input type="email" name="email" id="email" />
                </div>

                <div className="password-container">
                  <label htmlFor="password">Password</label>
                  <br />
                  <input type="password" name="password" id="password" />
                </div>

                <div className="forgot-password-container">
                  <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Sign In</button>
                <div className="dont-have-container">
                  <p>Don't have an account?</p>
                  <Link to="/signup" >
                    <a>Sign Up</a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="right-container">
        <img src={person} alt="banner" />
      </div>
    </div>
    </>
  );
};

export default Login;
