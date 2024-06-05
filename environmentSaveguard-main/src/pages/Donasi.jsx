import { Link } from "react-router-dom";
import "./../index.css";
import Navbar from "./../Navbar.jsx";
import Footer from "../Footer.jsx";
function Donasi() {
  return (
    <>
      <Navbar />
      <section id="donation">
        <div className="left-section">
          <h3>Let's Donate</h3>
          <h2>Donate Some Of Your Money To Protect the Environment</h2>
          <p>
            By donating some of your money, you can help protect and preserve our environment. Every donation, big or small, will be used to fund various programs and initiatives aimed at preserving biodiversity, reducing pollution, and
            promoting sustainable practices.
          </p>
          <Link to="/Membership" className="donate-button">
            Donation Now
          </Link>
        </div>
        <div className="right-section">
          <img src="donasi/Donasi.png" alt="Donation Image" className="donation-image" />
        </div>
      </section>

      <section id="donasi-information">
        <div className="left-info">
          <h3>Nature Health</h3>
          <h2>Conduct Routine Programs In Several Placest</h2>
          <h1>50%</h1>
        </div>
        <div className="right-info">
          <h3>Protecting Nature</h3>
          <h2>Conduct Routine Programs In Several Places</h2>
          <h1>50%</h1>
        </div>
      </section>

      <section id="program">
        <div className="title">
          <h1>Our Program</h1>
          <Link to="/komunitas">See All</Link>
        </div>

        <div className="card-container">
          <div className="card">
            <img src="donasi/Gambar 5.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Trash Picking Movementt</h5>
              <a href="#" className="btn btn-primary">
                Join With Us
              </a>
            </div>
          </div>

          <div className="card">
            <img src="donasi/Gambar 4.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Preserving Extinct Animals</h5>
              <a href="#" className="btn btn-primary">
                Join With Us
              </a>
            </div>
          </div>

          <div className="card">
            <img src="donasi/Gambar 3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Planting Trees</h5>
              <a href="#" className="btn btn-primary">
                Join With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="ongoing-projects">
        <h2>On Going Projects</h2>
        <div className="image-container">
          <img src="donasi/Gambar 6.png" alt="Project 1" />
          <img src="donasi/Gambar 7.png" alt="Project 2" />
          <img src="donasi/Gambar 8.png" alt="Project 3" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Donasi;
