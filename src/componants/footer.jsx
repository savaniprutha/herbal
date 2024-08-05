import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget company-intro-widget">
                  <a href="index.html" className="site-logo">
                    <img src="img/footer-logo.png" alt="logo" />
                  </a>
                  <p>
                    Elementum nisi quis eleifend quam adipiscing. Cursus metus
                    aliquam eleifend mi in nulla posuere sollicitudin
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget course-links-widget">
                  <h5 className="widget-title">Main Menu</h5>
                  <ul className="courses-link-list">
                    <li>
                      <a href="#">Academic Home</a>
                    </li>
                    <li>
                      <a href="#">Web About us</a>
                    </li>
                    <li>
                      <a href="#">PC Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Ui Web Blogs</a>
                    </li>
                    <li>
                      <a href="#">Web Shop</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget latest-news-widget">
                  <h5 className="widget-title">lastest news</h5>
                  <ul className="small-post-list">
                    <li>
                      <div className="small-post-item">
                        <a href="#" className="post-date">
                          July 18, 2018
                        </a>
                        <h6 className="small-post-title">
                          <a href="#">
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="small-post-item">
                        <a href="#" className="post-date">
                          July 28, 2018
                        </a>
                        <h6 className="small-post-title">
                          <a href="#">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget newsletter-widget">
                  <h5 className="widget-title">Newsletter</h5>
                  <div className="footer-newsletter">
                    <p>
                      Sign Up to Our Newsletter to Get Latest Updates & Services
                    </p>
                    <form className="news-letter-form">
                      <input
                        type="email"
                        name="news-email"
                        id="news-email"
                        placeholder="Your email address"
                      />
                      <input type="submit" value="Send" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-sm-left text-center">
                <span className="copy-right-text">
                  © Herbalsisters All rights reserved Copyrights 2022
                </span>
              </div>
              <div className="col-md-6 col-sm-6">
                <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
