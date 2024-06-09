import Footer from "./../Footer.jsx";
import Navbar from "./../Navbar.jsx";
import "./../index.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Artikel() {
  return (
    <>
      <Navbar />
      <div id="article-hero">
        <div className="container-article">
          <table>
            <tr>
              <td rowSpan={2}>
                <img src="/Artikel/Happy friends chatting together, stock image in botanical garden.png" alt="Main Image" class="main-image" />
              </td>
              <td>
                <img src="/Artikel/Rectangle 27.png" alt="Gambar 1" />
              </td>
              <td>
                <img src="/Artikel/Rectangle 24.png" alt="Gambar 2" />
              </td>
            </tr>
            <tr>
              <td>
                <img src="/Artikel/Rectangle 28.png" alt="Gambar 3" />
              </td>
              <td>
                <img src="/Artikel/Rectangle 26.png" alt="Gambar 4" />
              </td>
            </tr>
          </table>
        </div>
      </div>

      <section id="artikel-card">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="/Artikel/Playing an Important Role Like Coral Reefs.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>"The Magic of Coral Reefs: The Indispensable Support of Marine Ecosystems and Coastal Protection"</h5>
                  <p>
                    Coral reefs, with all their beauty and biological richness, are not only a stunning tourist attraction, but also the lifeblood of millions of marine creatures around the world, making them a critical ecosystem for the
                    global ecological balance.
                  </p>
                  <Link to="/artikeldetail" className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="/Artikel/Rectangle 1837.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Coral reefs play an important role in protecting the ocean and supporting life</h5>
                  <p>
                    Food, Land Use, and Land Use Change (FOLU) plays a role in reducing deforestation to achieve the 2030 net sink goal on climate change. FOLU is considered key in managing land and food to reduce carbon emissions and
                    maintain environmental sustainability.
                  </p>
                  <Link to="#" className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="/Artikel/Rectangle 1823.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Choose to Recover from Climate Crisis and Devastation Democracy and Human Rights</h5>
                  <p>
                    The 2024 elections are taking place in the midst of a difficult situation; the climate crisis is increasingly threatening the lives of citizens, the democratic space is narrowing, and the future for the younger
                    generation is uncertain.
                  </p>
                  <Link to="#" className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="/Artikel/Rectangle 1841.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>"Stop Talking to the Earth: Understanding the Direct Impacts of the Climate Crisis on Food Loss and Damage"</h5>
                  <p>Loss and damage from the climate crisis will be increasingly experienced by those who rely on livelihoods from food commodities such as farmers and fishermen.</p>
                  <Link to="#" className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="/Artikel/Rectangle 1831.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Mourning Flowers to Police Arrests: Everything about Papuan Youth's Support for Awyu Tribe</h5>
                  <p>In various places in Papua, support continues to pour in for the Awyu tribe's struggle. Papuan youths held rallies from Jayapura to Manokwari-even facing repressive actions from the authorities.</p>
                  <Link to="artikel-detail.html" className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="/Artikel/Rectangle 1835.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Pisang Kepok, Flores' Endangered Rice Support and Source of Income for Farmers</h5>
                  <p>Pisang Kepok, the leading variety on the island of Flores, has not only provided a bountiful harvest, but has also become the mainstay of rice farming and a source of income for local farmers. </p>
                  <Link to="#" className="btn">
                    Read More
                  </Link>
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

export default Artikel;