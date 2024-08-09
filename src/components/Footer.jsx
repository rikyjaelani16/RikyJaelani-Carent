import React from "react";
import facebook from "../assets/icon_facebook.png";
import instagram from "../assets/icon_instagram.png";
import twitter from "../assets/icon_twitter.png";
import mail from "../assets/icon_mail.png";
import twitch from "../assets/icon_twitch.png";
export default function Footer() {
  return (
    <div>
      <section id="footer">
        <div class="container text-center mb-5">
          <div class="row">
            <div class="col text-start">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div class="col mb-2">
              <p>Our services</p>
              <p>Why Us</p>
              <p>Testimonial</p>
              <p>FAQ</p>
            </div>

            <div class="col">
              <div class="col text-start">Connect with us</div>
              <div class=" d-flex justify-content-start my-3">
                <div class="col">
                  <img src={facebook}></img>
                </div>
                <div class="col">
                  <img src={instagram}></img>
                </div>
                <div class="col">
                  <img src={twitter}></img>
                </div>
                <div class="col">
                  <img src={mail}></img>
                </div>
                <div class="col">
                  <img src={twitch}></img>
                </div>
              </div>
            </div>
            <div class="col">
              <p>Copyright Binar 2022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
