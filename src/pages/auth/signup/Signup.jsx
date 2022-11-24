import React from "react";
import { Link } from "react-router-dom";
import { person } from "../../../assets";
import { Navbar } from "../../../components";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left-container">
          <div className="auth-container">
            <div className="auth-form">
              <h1>Sign Up</h1>
              <h3>Create Account to start using EasyRecruit</h3>
              <form className="form">
                <div className="form-group">
                  <div className="input-container">
                    <label htmlFor="email">First Name</label>
                    <br />
                    <input type="text" />
                  </div>

                  <div className="input-container">
                    <label htmlFor="email">Last Name</label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" id="email" />
                  </div>

                  <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" id="password" />
                  </div>

                  <div className="input-container">
                    <label htmlFor="password">Confirm Password</label>
                    <br />
                    <input type="password" name="password" id="password" />
                  </div>
                  

                 
                  <button type="submit">Sign In</button>
                  <div className="dont-have-container">
                    <p>Already have an account?</p>
                    <Link to="/login">
                      <a>Sign in</a>
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

export default Signup;
