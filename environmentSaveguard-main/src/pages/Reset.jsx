import React from "react";
import "./../index.css";

function Reset() {
  return (
    <>
      <section id="reset">
        <div className="container">
          <div className="left-side">
            <img src="Password/Forgot.png" alt="Forgot Image" className="forgot-image" />
          </div>
          <div className="right-side">
            <h2>
              <span>Reset</span> Password
            </h2>
            <p>Enter your new password</p>
            <form>
              <div className="input-field">
                <input type="password" placeholder="Enter your password" />
                <span className="toggle-password">
                  <i className="fa-regular fa-eye-slash"></i>
                </span>
              </div>
              <button type="submit">Reset Password</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reset;
