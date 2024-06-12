import React from "react";
import "./../index.css";
import { Link} from "react-router-dom";

const userKey = 'user';
const tokenKey = 'token';

function Profil() {
  // const navigate = useNavigate();

  const userString = localStorage.getItem(userKey);
  const user = userString ? JSON.parse(userString) : {};

  const handleLogout = (e) => {
    localStorage.removeItem(userKey)
    localStorage.removeItem(tokenKey)

    navigate('/')
  }
  return (
    <>
      <section id="profil">
        <div class="profilpage">
          <nav class="navbar">
            <div class="navbar-left">
              <img src="profil/Logo.png" alt="Logo" class="logo" />
            </div>
            <div class="navbar-right">
              <img src="profil/profil.png" alt="Profile" class="profile-pic" />
              <span class="welcome-text">
                Welcome Back! <span id="username">{user?.name}</span>
              </span>
            </div>
          </nav>
        </div>

        <section class="my-profil">
          <section class="small-container">
            <Link to="/" class="profile-link">
              <i class="far fa-user"></i> My Profile
            </Link>
            <Link to="/" class="logout-link" onClick={handleLogout}>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out
            </Link>
          </section>

          <section class="large-container">
            <div class="profile-info">
              <div class="profile-image">
                <i class="fa-solid fa-arrow-left"></i>
                <img src="profil/profill.png" alt="Foto" class="foto-profil" />
              </div>
              <div class="profile-details">
                <h2><span id="username">{user?.name}</span></h2>
                <p><span id="email">{user?.email}</span></p>
              </div>
            </div>
            <form>
              <fieldset>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="username" name="username" placeholder={user?.name} disabled />
                <br />
                <br />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder={user?.email} disabled />
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