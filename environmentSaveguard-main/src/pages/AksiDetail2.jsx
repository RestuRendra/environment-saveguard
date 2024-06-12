import React, { useState, useEffect } from "react";
import "./../index.css";
import Navbar from "./../Navbar.jsx";
import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";

const userKey = 'user';
// const tokenKey = 'token';

const AksiDetail2 = () => {
  const userString = localStorage.getItem(userKey);
  const user = userString ? JSON.parse(userString) : {};
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupLogin, setShowPopupLogin] = useState(false);

  

  const handlePopup = (event) => {
    event.preventDefault();
    if (!userString) {
      setShowPopup(true);
    } else {
      setShowPopupLogin(true);
    }
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  useEffect(() => {
    const loadingBar = document.querySelector(".loading-bar");
    loadingBar.style.width = "70%";
  }, []);

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-wrapper input, .input-wrapper select");
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (input.value.trim() !== "") {
          input.nextElementSibling.style.display = "none";
        } else {
          input.nextElementSibling.style.display = "inline";
        }
      });
    });

    // Cleanup the event listeners on component unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", () => {});
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="aksi-detail2">
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-6 order-md-1 order-2">
              <h2>I'm with the Papua Forest</h2>
              <h6>Flora and fauna have a home in the forest. This means that by clearing the forest for land use, not only the trees are lost but the continuity of the flora and fauna in it is threatened.</h6>
              <img src="aksi/Deforestation threatens tree kangaroo habitat in Papua New Guinea 1.png" className="picture-aksi2" alt="Deforestation threatens tree kangaroo habitat in Papua New Guinea" />
              <h6>
                Flora that takes a long time to grow is simply destroyed. Fauna will lose their homes and ecosystems that support their survival, for those that can survive we may still be able to see them but it is possible that forest
                destruction can make some animals end up almost extinct or even extinct.
              </h6>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Tambahkan namamu di bawah ini, dan bersama, kita bisa lindungi hutan Papua!</h4>
                  <p>11,717 telah menandatangani petisi ini</p>
                  <div className="loading-bar-container">
                    <div className="loading-bar"></div>
                  </div>
                  <p>8283 masih dibutuhkan untuk menuju 20,000</p>
                  <form className="form-container aksi2">
                    <div className="form-group">
                    <label htmlFor="full-name">Username</label>
                    <input type="text" id="username" name="username" placeholder={user?.name} disabled />
                    </div>
                    <div className="form-group">
                    <label htmlFor="full-name">Email</label>
                    <input type="email" id="email" name="email" placeholder={user?.email} disabled />
                    </div>
                  </form>
                  <h6>
                    Environment Safeguard memerlukan informasi kontak yang Anda berikan kepada kami untuk menghubungi Anda tentang produk dan layanan kami. Anda dapat berhenti berlangganan dari komunikasi ini kapan pun. Untuk informasi
                    tentang cara berhenti berlangganan, serta praktik privasi dan komitmen kami untuk melindungi privasi Anda, tinjau Kebijakan Privasi kami.
                  </h6>
                  <button className="btn" onClick={handlePopup}>
                    Action List
                  </button>
                  {showPopup && (
                    <div className="overlay" id="popupOverlay">
                      <div className="popup">
                        <div className="icon-container">
                          <img src="Pop.png" alt="pop up" className="icon" />
                          <p className="message">Maaf Anda Harus</p>
                          <p className="message">Login Terlebih Dahulu!</p>
                          <button className="close-button" onClick={() => setShowPopup(false)}>
                            &times;
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {showPopupLogin && (
                    <div className="overlay" id="popupOverlay">
                      <div className="popup">
                        <div className="icon-container">
                          <img src="./public/password/Done.png" alt="pop up" className="icon" />
                          <p className="message">Silahkan cek email anda untuk pemberitahuan lebih lanjut</p>
                          <button className="close-button" onClick={() => setShowPopupLogin(false)}>
                            &times;
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AksiDetail2;
