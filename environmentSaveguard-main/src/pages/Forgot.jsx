import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <>
      <section id="forgot">
        <div className="container">
          <div className="left-side">
            <img src="Password/Forgot.png" alt="Forgot Image" className="forgot-image" />
          </div>
          <div className="right-side">
            <h2>Forgot Password?</h2>
            <p>Enter your e-mail address to get a verification code.</p>
            <form>
              <div className="input-container">
                <input type="email" placeholder="Enter your email address" required />
                <i className="fa-regular fa-envelope"></i>
              </div>
              <button type="submit">Next</button>
              <p className="back-to-signin">
                <Link to="/signin">
                  Back to <span>Sign In</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forgot;
