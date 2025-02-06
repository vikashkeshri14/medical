import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section/social";
import Copyright from "./copyright";

class Footer_v1 extends Component {
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
                  <p className="footer-text">
                    Medmart is a digital marketplace that connects pharmacies
                    and medical centers to medical suppliers to easily,
                    conveniently and quickly access and receive medicine,
                    medical supplies and cosmetics at the best prices.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title text-black">Company</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/blog-grid">Blog</Link>
                      </li>
                      <li>
                        <Link to="/shop">All Products</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title text-black">Services</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/about">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="/shop">Promotional Offers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title text-black">Customer Care</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/my-account">My account</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link to="/add-listing">Add listing</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
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

export default Footer_v1;
