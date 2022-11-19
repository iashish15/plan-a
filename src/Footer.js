import React from "react";
import web22 from "../src/images/bottom-image.png";
function Footer() {
  return (
    <footer style={{ marginTop: "50px" }} className="container-fluid">
      <div className="container-color p-5">
        <div className="row">
          <div className="col-3">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="link-dark nav-link">
                  Home
                </a>
              </li>
              <li className="mb-2 nav-item">
                <a href="/strory" className="link-dark nav-link">
                  Stories
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="link-dark nav-link">
                  About Me
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="link-dark nav-link">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="link-dark nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <p className=" mb-2   h-1">
              JOIN THE HATTELLS FAMILY <br /> RECEIVE OUR UPDATES, STORIES &
              COLLECTION.
            </p>
            <input className="input mb-3 mt-3" placeholder="Name"></input>{" "}
            <br />
            <input className="input" placeholder="Email Address"></input>
          </div>
          <div className="col-5">
            <div className="card container-color card-border">
              <img
                width="300"
                src={web22}
                className="img-responsive web-22"
                style={{ marginLeft: "100px" }}
              />
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-8 col-sm-12">
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="#">
                  (222) 555-0118
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  hattelles@singapore.com
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
