import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src="img/logo.png" alt="company logo" width={150} />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  aria-current="page"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Book Now
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                <img src="img/search.png" alt="" />
              </button>
            </form>
            <img className="heart" src="img/heart.png" width={95} alt="" />
          </div>
        </nav>
      </div>
    </>
  );
}
