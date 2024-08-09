import React from "react";
import { Accordion } from "react-bootstrap";
import service from "../../assets/img-service.png";
import complete from "../../assets/icon_complete.svg";
import price from "../../assets/icon_price.svg";
import hours from "../../assets/icon_24hrs.svg";
import profesional from "../../assets/icon_professional.svg";
import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import { useNavigate } from "react-router-dom";
import Testimoni from "../../components/Testimoni";
import Footer from "../../components/Footer";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <Hero />
      <section id="our-services">
        <div className="container py-5 my-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <img
                src={service}
                className="img-fluid"
                alt="TMMIN Car Rental Services"
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us">
        <div className="container py-5 my-5">
          {/* <!-- container digunakan di setiap section agar tampilan rapi dan konsisten --> */}
          <h2 className="mb-3">Why Us?</h2>
          <p className="mb-4">Mengapa harus pilih Binar Car Rental?</p>
          {/* <!-- cara cepat membuat row col -> ketik : div.row>div.col*4 , kemudian ctrl + space  --> */}
          <div className="row">
            {/* <!-- perilaku col di bawah sama dengan yang di terapkan di hero -->
                <!-- tetapi yang berbeda disini kita menggunakan 3 ukuran berbeda  -->
                <!-- col-12 (full) di ukuran layar terkecil sampai 767px -->
                <!-- col-md-6 (50:50 / setengah ukuran) di ukuran layar 768px keatas sampai 991px -->
                <!-- col-lg-3 (dibagi menjadi 4 kolom (12/4)) akan di terapkan di ukuran layar mulai 992px keatas --> */}
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={complete}
                    className="mb-4"
                    alt="TMMIN Car Rental - Mobil Lengkap"
                  />
                  <h3 className="mb-4">Mobil Lengkap</h3>
                  <p>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={price}
                    className="mb-4"
                    alt="TMMIN Car Rental - Harga Murah"
                  />
                  <h3 className="mb-4">Harga Murah</h3>
                  <p>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={hours}
                    className="mb-4"
                    alt="TMMIN Car Rental - Layanan 24 Jam"
                  />
                  <h3 className="mb-4">Layanan 24 Jam</h3>
                  <p>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={profesional}
                    className="mb-4"
                    alt="TMMIN Car Rental - Sopir Profesional"
                  />
                  <h3 className="mb-4">Sopir Profesional</h3>
                  <p>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimoni />
      <section id="faq">
        <div classNameName="container justify-content-center">
          <div className="card bg-red text-light">
            <div className="card-body">
              <div className=" align-items-center text-center">
                <div className=" mt-2 mb-2 col-md-5 mx-auto">
                  <h5 className="card-title">
                    Sewa Mobil di (Lokasimu) Sekarang
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="my-4"></div>
                  <a
                    onClick={() => {
                      navigate("/sewa");
                    }}
                    className="btn btn-success"
                  >
                    Mulai Sewa Mobil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-13 col-md-6">
              <h2 className="mb-3">Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-13 col-md-6">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Apa saja syarat yang dibutuhkan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Berapa hari minimal sewa mobil lepas kunci?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Apakah Ada biaya antar-jemput?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Bagaimana jika terjadi kecelakaan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
