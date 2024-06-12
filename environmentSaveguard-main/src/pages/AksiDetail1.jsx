import Navbar from "./../Navbar.jsx";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";

function AksiDetail1() {
  
  return (
    <>
      <Navbar />
      <section id="aksi-detail1">
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-6 order-md-1 order-2">
              <h2>I'm with the Papua Forest</h2>
              <h6>
                Papua has a hidden beauty behind its forests. Various flora and fauna that are typical of Papua are in these forests. The beauty of Papua's forests remained there until the touch of human hands came to damage it rather than
                protect it.
              </h6>
              <Link to="/aksidetail2" className="btn">
                Join the Action
              </Link>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <div className="image_container">
                <div className="imgbox">
                  <img src="aksi/Primary Forest in Papua 1.png" alt="user picture" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="aksi1">
            <h5>
              Papua's forests are assets that must be preserved at all times. All actions that can damage Papua's forests must be stopped immediately so that our children and grandchildren can still see the beauty of Papua's forests. Enough
              forests in Indonesia have been deforested, burned, converted for short-term human interests, which if not stopped, Indonesia could have very few forests. In order to protect Papua's forests, all means must be taken, starting
              from laws that regulate, guarding with the existence of forest police, etc. Through the Saya Bersama Hutan Papua (SBHP) program, we are committed to preserving forests in Papua. Let us together protect our forests for a green
              future!!!
            </h5>

            <img src="aksi/Dominica.png" className="picture-aksi" />
          </div>
        </div>
      </section>

      <div id="komen">
        <div class="content-diskusi">
          <div class="sosmed">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <hr />
            <div class="diskusi">
              <h3>Discussion</h3>
              <div class="comment">
                <img src="Artikel/Artikel Detail/Mask group.png" alt="Profile Picture" />
                <div class="comment-body">
                  <div class="comment-header">
                    <span class="comment-name">Mr Zean</span>
                    <span class="comment-date">May 01 2024</span>
                  </div>
                  <div class="comment-text">Does global warming contribute to coral morbidity?</div>
                </div>
              </div>
              <div class="comment">
                <img src="Artikel/Artikel Detail/Mask group.png" alt="Profile Picture" />
                <div class="comment-body">
                  <div class="comment-header">
                    <span class="comment-name">Mr Zean</span>
                    <span class="comment-date">May 01 2024</span>
                  </div>
                  <div class="comment-text">Can climate change cause coral reefs to disappear?</div>
                </div>
              </div>
              <div class="comment-diskusi">
                <hr />
                <h3>Leave a discussion reply</h3>
                <form action="#" method="post">
                  <textarea id="comment" name="comment" rows="4" cols="50" placeholder="Write your message here..."></textarea>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AksiDetail1;