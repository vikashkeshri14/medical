import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section/social";
import Copyright from "./copyright";

class Footer extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "Footer logo";

    return (
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img
                        src={publicUrl + "assets/img/medmart.png"}
                        alt="Logo"
                      />
                    </div>
                  </div>
                  <p className="footer-text font-14">
                    Medmart is a digital marketplace that connects pharmacies
                    and medical centers to medical suppliers to easily,
                    conveniently and quickly access and receive medicine,
                    medical supplies and cosmetics at the best prices.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title text-black">Contact Info</h4>
                  <div className="footer-menu go-top">
                    <span className="footer-text font-12">Call us free:</span>
                    <h6 className="ltn__secondary-color">920000958</h6>
                    <p className="font-14 footer-text">
                      Prince Muqrin Ibn Abdulaziz St, An Nuzhah,
                      <br /> Riyadh 12474 Help@medmart.health <br />
                      Hours: 9:00 AM – 5:00PM Sat- Thu
                    </p>
                    <div class="ltn__social-media footer-text mt-20">
                      <ul>
                        <li>
                          <a href="#" title="Twitter">
                            <i class="fab fa-x"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Facebook">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Youtube">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Linkedin">
                            <i class="fab fa-snapchat"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Linkedin">
                            <i class="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title text-black">Information</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link className="footer-text" to="/about-us">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-text" to="/contact-us">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-text" to="/blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-text" to="/drugs">
                          Drugs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    );
  }
}

export default Footer;
