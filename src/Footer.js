import React from "react";
import web22 from "../src/images/bottom-image.png";
function Footer() {
  return (
    <footer className="bd-footer container py-5">
      <div className="container-color py-5">
        <div className="row">
          <div className="col-4 col-lg-2 col-md-2 col-sm-12 offset-lg-1 offset-md-1 mb-3">
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
          <div className="col-4 col-md-6 col-sm-10  mb-3">
            <p className=" mb-2   h-1">
              JOIN THE HATTELLS FAMILY <br /> RECEIVE OUR UPDATES, STORIES &
              COLLECTION.
            </p>
            <input className="input mb-3 mt-3" placeholder="Name"></input>{" "}
            <br />
            <input className="input" placeholder="Email Address"></input>
          </div>
          <div className="col-3 ms-auto  ">
            <div className="card container-color card-border">
              {" "}
              <img src={web22} className="img-responsive web-22" />
            </div>
          </div>
        </div>
        <div className="row mx-auto"></div>
        <div className="col-8 col-sm-12  offset-lg-1 offset-md-1 d-flex space-content-between ">
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
    </footer>
  );
}
export default Footer;
