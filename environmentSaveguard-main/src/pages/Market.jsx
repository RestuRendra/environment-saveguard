import Footer from "../Footer.jsx";
import "./../index.css";
import Navbar from "./../Navbar.jsx";
import { Link } from "react-router-dom";

function Market() {
  return (
    <>
      <Navbar />
      <section id="market-hero">
        <div className="image-wrapper">
          <img src="market/HeroMarket1.png" alt="Gambar 1" className="additional-image large-image" />
          <img src="market/HeroMarket2.png" alt="Gambar 2" className="additional-image" />
        </div>
      </section>

      <section id="toko">
        <div className="card1">
          <div className="card-body">
            <h5 className="card-title">Butik Daur Ulang</h5>
            <p className="card-text">It is a retail service for plastic waste recycling products in the Depok District, Sleman, Indonesia.</p>
            <Link to="/DetailMarket" className="card-link">
              More Detail
            </Link>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src="market/PiringDaurUlang.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6>Piring Daur Ulang</h6>
                <h4>Rp.22.000</h4>
                <div className="btn-container">
                  <a className="btn-left">
                    <i className="fa-solid fa-star"></i> 4.9
                  </a>
                  <a href="#" className="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="market/Tas Godie Bag.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6>Tas GodieBag</h6>
                <h4>Rp.30.000</h4>
                <div className="btn-container">
                  <a className="btn-left">
                    <i className="fa-solid fa-star"></i> 4.9
                  </a>
                  <a href="#" className="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="market/Souvenir Candle Lilin.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6>Souvenir Candle Lilin</h6>
                <h4>Rp.12.000</h4>
                <div className="btn-container">
                  <a className="btn-left">
                    <i className="fa-solid fa-star"></i> 4.2
                  </a>
                  <a href="#" className="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="toko">
        <div className="card1">
          <div className="card-body">
            <h5 className="card-title">Revaldi.Store</h5>
            <p className="card-text">It is a retail service for recycled craft products in West Jakarta City, Indonesia.</p>
            <a href="detail-market.html" className="card-link">
              More Detail
            </a>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src="market/Tas Karung Bekas.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6>Tas Dari Karung Bekas</h6>
                <h4>Rp.6.500</h4>
                <div className="btn-container">
                  <a className="btn-left">
                    <i className="fa-solid fa-star"></i> 4.1
                  </a>
                  <a href="#" className="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="market/Gantungan Kunci.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6>Gantungan Kunci </h6>
                <h4>Rp.3.300</h4>
                <div className="btn-container">
                  <a className="btn-left">
                    <i className="fa-solid fa-star"></i> 4.9
                  </a>
                  <a href="#" className="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="market/Tas Belanja Daur Ulang.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6>Tas Belanja Daur Ulang</h6>
                <h4>Rp.13.000</h4>
                <div className="btn-container">
                  <a className="btn-left">
                    <i className="fa-solid fa-star"></i> 4.8
                  </a>
                  <a href="#" className="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rekomendasi">
        <div className="container mb-3">
          <h1>Recommendation</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="market/PiringDaurUlangg.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Piring Rotan dari bahan Daur Ulang</h3>
                  <h2>Rp.22.000</h2>
                  <div className="btn-container">
                    <a className="btn-left">
                      <i className="fa-solid fa-star"></i> 4.9
                    </a>
                    <a href="#" className="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="market/Tas Minyak Daur Ulang.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Tas Totebag Kemasan Minyak Daur Ulang</h3>
                  <h2>Rp.25.000 - 30.000</h2>
                  <div className="btn-container">
                    <a className="btn-left">
                      <i className="fa-solid fa-star"></i> 5.0
                    </a>
                    <a href="#" className="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="market/Tempat Pensil Daur Ulang.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Tempat Pensil Daur Ulang Kotak Pencil Case</h3>
                  <h2>Rp.27.000</h2>
                  <div className="btn-container">
                    <a className="btn-left">
                      <i className="fa-solid fa-star"></i> 5.0
                    </a>
                    <a href="#" className="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="market/Tempat Pencil Kaleng Rokok dan Sedotan.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Tempat pensil dari kaleng rokok bekas dan sedotan</h3>
                  <h2>Rp.18.000</h2>
                  <div className="btn-container">
                    <a className="btn-left">
                      <i className="fa-solid fa-star"></i> 4.9
                    </a>
                    <a href="#" className="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="market/Tempat Pensil Daur Ulang Bekas.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Tempat pensil / vas bunga dari botol bekas</h3>
                  <h2>Rp.15.500</h2>
                  <div className="btn-container">
                    <a className="btn-left">
                      <i className="fa-solid fa-star"></i> 4.9
                    </a>
                    <a href="#" className="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="market/Kipas Tangan.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3>Kipas tangan dari sedotan bekas</h3>
                  <h2>Rp.16.000</h2>
                  <div className="btn-container">
                    <a className="btn-left">
                      <i className="fa-solid fa-star"></i> 4.8
                    </a>
                    <a href="#" className="btn">
                      Detail
                    </a>
                  </div>
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

export default Market;