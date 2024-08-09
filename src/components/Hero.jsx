import React from "react";
import zenix from "../assets/zenix 1.png";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();

  return (
    <section>
      <section id="hero" className="bg-red">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center text-light">
              <div>
                <h1 className="mb-4">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="mb-4">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <a
                  onClick={() => {
                    navigate("/cari");
                  }}
                  className="btn btn-success"
                >
                  Mulai Sewa Mobil
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={zenix} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
