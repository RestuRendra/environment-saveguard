import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";

function Profil() {
  return (
    <>
      <section id="profil">
        <div className="profilpage">
          <nav className="navbar">
            <div className="navbar-left">
              <img src="profil/Logo.png" alt="Logo" className="logo" />
            </div>
            <div className="navbar-right">
              <img src="profil/profil.png" alt="Profile" className="profile-pic" />
              <span className="welcome-text">
                Welcome Back! <span id="username">UserName</span>
              </span>
            </div>
          </nav>
        </div>

        <section className="my-profil">
          <section className="small-container">
            <Link to="/" className="profile-link">
              <i className="far fa-user"></i> My Profile
            </Link>
            <Link to="/" className="logout-link">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out
            </Link>
          </section>

          <section className="large-container">
            <div className="profile-info">
              <div className="profile-image">
                <i className="fa-solid fa-arrow-left"></i>
                <img src="profil/profill.png" alt="Foto" className="foto-profil" />
              </div>
              <div className="profile-details">
                <h2>Rabia Iskar</h2>
                <p>rabiaiskar1@gmail.com</p>
              </div>
            </div>
            <div className="edit-button">
              <button>Edit</button>
            </div>
            <form>
              <fieldset>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required />
                <br />
                <br />

                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Choose a username" required />
                <br />
                <br />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                <br />
                <br />
              </fieldset>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default Profil;
