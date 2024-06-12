
import Footer from "./../Footer.jsx";
import Navbar from "./../Navbar.jsx";
import "./../index.css";

function About() {
  return (
    <>
      <Navbar />
      <section id="about-hero">
        <div className="about">
          <div className="content">
            <h1>About Us</h1>
            <h5>
              Thank you for your concern and support for our mission to protect and preserve the environment. With your donation, you have become part of a global movement to safeguard biodiversity and pass on a greener planet to future
              generations.
            </h5>
            <a href="#about-visi-misi" className="teksbtn">
              More Information
            </a>
          </div>
        </div>
      </section>

      <section id="about-visi-misi">
        <div className="container">
          <div className="visi">
            <div className="visi-content">
              <h3>Our Vission</h3>
              <p>
                Our vision is to protect and preserve our planet for future generations. We believe in a sustainable future where people live in harmony with nature, and we are committed to promoting environmental awareness, conservation
                efforts, and sustainable practices.
              </p>
            </div>
            <div className="visi-image">
              <tr className="visi-image1">
                <td>
                  <img src="/About/aboutVisi1.png" alt="" />
                </td>
                <td>
                  <img src="/About/aboutVisi2.png" alt="" />
                </td>
              </tr>
              <tr>
                <td className="" colSpan={2}>
                  <img src="/About/aboutVisi3.png" alt="" />
                </td>
              </tr>
            </div>
          </div>
          <div className="visi">
            <div className="visi-image">
              <tr className="visi-image1">
                <td>
                  <img src="/About/aboutMisi1.png" alt="" />
                </td>
                <td>
                  <img src="/About/aboutMisi2.png" alt="" />
                </td>
              </tr>
              <tr>
                <td className="" colSpan={2}>
                  <img src="/About/aboutMisi3.png" alt="" />
                </td>
              </tr>
            </div>
            <div className="misi-content">
              <h3>Our Vission</h3>
              <ol>
                <li>Protecting Biodiversity</li>
                <li>Reducing Carbon Footprint</li>
                <li>Educating and Driving Action</li>
                <li>Promoting Environmental Justice</li>
                <li>Developing Collaborative Partnerships</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="testimoni">
        <div class="container mb-3">
          <h2>User Testimonials</h2>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <div class="card-part atas-bg">
                  <div class="quote-icon">
                      <img src="/About/Kutip.png" alt="" />
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      I enjoy reading articles about how to care for the environment. This helps me to better understand the simple ways that I can do to preserve nature.
                    </p>
                  </div>
                </div>
                <div class="card-part bawah-bg">
                  <div class="profile-container">
                  <img src="/About/Testimoni 1.png" alt="" />
                    <span>SUZANA</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-part atas-bg">
                  <div class="quote-icon">
                  <img src="/About/Kutip.png" alt="" />
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      I like reading in-depth article details about topics that interest me. Discussion forums also help me to get new perspectives from other users
                    </p>
                  </div>
                </div>
                <div class="card-part bawah-bg">
                  <div class="profile-container">
                  <img src="/About/Testimoni 2.png" alt="" />
                    <span>LÍVIA</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-part atas-bg">
                  <div class="quote-icon">
                  <img src="/About/Kutip.png" alt="" />
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      I want to help preserve nature, and donation is one way I can do it. This platform makes it easy for me to donate.
                    </p>
                  </div>
                </div>
                <div class="card-part bawah-bg">
                  <div class="profile-container">
                  <img src="/About/Testimonii 3.png" alt="" />
                    <span>KÁTIA</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-part atas-bg">
                  <div class="quote-icon">
                  <img src="/About/Kutip.png" alt="" />
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      I am happy to join the nature lovers community on this platform. I can learn a lot from other community members and share my own experiences.
                    </p>
                  </div>
                </div>
                <div class="card-part bawah-bg">
                  <div class="profile-container">
                    <img src="/About/Testimoni 4.png" alt="" />
                    <span>MATHEUS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container mb-3">
          <h2>Our Features</h2>
          <h4>These Are Some Of The Features We Provide</h4>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="About/fitur artikel.jpg" className="card-img-top" alt="Artikel" />
                <div className="centered">Artikel</div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="About/fitur donasi.jpg" className="card-img-top" alt="Donasi" />
                <div className="centered">Donation</div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="About/fitur aksi.jpg" className="card-img-top" alt="Aksi" />
                <div className="centered">Aksi</div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="cols">
              <div className="card">
                <img src="About/fitur diskusi.jpg" className="card-img-top" alt="Forum Discussion" />
                <div className="centered">Forum Discussion</div>
              </div>
            </div>
            <div className="cols">
              <div className="card">
                <img src="About/fitur olshop.jpg" className="card-img-top" alt="Market Place" />
                <div className="centered">Shop</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
