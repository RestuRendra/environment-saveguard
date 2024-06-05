import Navbar from "./../Navbar.jsx";
import "./../index.css";
import Footer from "../Footer";

function Komunitas() {
  return (
    <>
      <Navbar />
      <section id="komunitas-card">
        <div className="container mb-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="komunitas/Pandu Laut Nusantara.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Pandu Laut Nusantara</h3>
                  <p>Eco Community</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="komunitas/Diet-Kantong-Plastik-6-Daftar-Komunitas-Peduli-Lingkungan.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Youth for Climate Change Indonesia (YFCC Indonesia)</h3>
                  <p>Eco Community</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="komunitas/Kampung juang 1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Kampung Djoeang Surabaya</h3>
                  <p>Eco Community</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="komunitas/image5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Zero Waste Indonesia</h3>
                  <p>Eco Community</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="komunitas/image6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Sustaination</h3>
                  <p>Eco Community</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="komunitas/KeMangteer.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>KeMANGTEER</h3>
                  <p>Eco Community</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="komunitas/image 12.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Yayasan Konservasi Laut Indonesia</h3>
                  <p>Eco Community</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="komunitas/image 8.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Pepelingasih</h3>
                  <p>Eco Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Komunitas;
