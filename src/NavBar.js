import React from "react";
import web from "../src/images/company_logo.png";

function NavBar() {
  return (
    <>
      <header className=" justify-content-center py-3">
        <div className="container">
          <div className="d-flex flex-wrap  align-items-center justify-content-center justify-content-sm-end justify-content-xs-end justify-content-md-end justify-content-lg-end">
            <div className=" col-lg-auto col-md-auto col-sm-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                class="form-control"
                classname="form-control form-control-dark"
                placeholder="Search..."
                aria-label="search"
              />
            </div>
            <div className="text-end">
              <button className="btn me-2" type="button">
                {" "}
                Login
              </button>
              <button className="btn " type="button">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="abc">
        <img
          alt="hero"
          height="300"
          src={web}
          className="img-responsive top-image"
        />
      </section>
      <div style={{ backgroundColor: "#fdf2e6" }}>
        <div className="container nav-bg">
          <div className="row">
            <div className="col mx-auto">
              <nav className="navbar  navbar-expand-lg">
                <div className="container ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse "
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav nav-ul  gap-md-auto gap-sm-auto gap-xs-auto gap-lg-5 mx-auto mb-2 mb-lg-0">
                      <li className="nav-item ">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="/">
                          Stories
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          About Me
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item" style={{ marginLeft: "60px" }}>
                        <a className="nav-link" href="#">
                          <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
