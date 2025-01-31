import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section/social";

class Navbar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <div>
        <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
          <div className="ltn__header-top-area section-bg-6 pt-3 pb-3 top-area-color-white---">
            <div className="container">
              <div className="row ">
                <div className="col-md-2 p-2">
                  <div className="ltn__top-bar-menu">
                    <Link to="/">
                      <img
                        src={publicUrl + "assets/img/medmart.png"}
                        alt="Medmart"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-10 p-2">
                  <div className="top-bar-right text-end">
                    <div className="ltn__top-bar-menu">
                      <div className="row">
                        <div className="col-md-3 d-none d-xl-block">
                          <div class="header-contact-info text-end">
                            <ul>
                              <li>
                                <div class="mini-cart-icon mini-cart-icon-2">
                                  <a
                                    href="#ltn__utilize-cart-menu"
                                    class="ltn__utilize-toggle"
                                  >
                                    <span class="mini-cart-icon font-24">
                                      <i class="fa fa-volume-control-phone"></i>
                                    </span>
                                    <h6 className="font-13 ">
                                      <span className="font-13 gray-light font-weight-400">
                                        Call us free:
                                      </span>
                                      <span class="ltn__secondary-color">
                                        920000958
                                      </span>
                                    </h6>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="ltn__search-widget mb-0 border-radius-30">
                            <form action="#">
                              <input
                                type="text"
                                name="search"
                                placeholder="Search your keyword..."
                              />
                              <button type="submit">
                                <i className="fas fa-search" />
                              </button>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-3 d-none d-xl-block">
                          <div class="ltn__header-options">
                            <ul>
                              <li>
                                <div class="mini-cart-icon mini-cart-icon-2">
                                  <a class="ltn__utilize-toggle">
                                    <span class="mini-cart-icon">
                                      <i class="icon-shopping-cart"></i>
                                      <sup>2</sup>
                                    </span>

                                    <span class="mini-cart-icon font-24">
                                      <i class="icon-user"></i>
                                    </span>
                                    <h6 className="font-13 text-left ">
                                      <span className="font-13 gray-light  font-weight-400">
                                        My Account
                                      </span>
                                      <span class=" text-black font-12 font-weight-300 ">
                                        <a href="/test">Login</a> /
                                        <a href="/test">Register</a>
                                      </span>
                                    </h6>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
            <div className="container">
              <div className="row">
                <div className="col d-none d-xl-block">
                  <div className="block width-95">
                    <div className="site-logo block go-top ">
                      <div className="ltn__search-widget mb-0  border-radius-30">
                        <form class="d-flex category-bck p-1 border-radius-30">
                          <div class="input-group">
                            <span class="input-group-text-category border-radius-30-left  bg-white">
                              <i class="fa fa-bars text-black font-14"></i>
                            </span>
                            <input
                              className="form-control text-white category-bck"
                              type="search"
                              value="All Categories"
                              readOnly
                              disabled
                              aria-label="Search"
                            />
                            <span class="input-group-text-category border-radius-30-right category-bck">
                              <i class="fa fa-chevron-down text-black font-14"></i>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col header-menu-column">
                  <div className="header-menu d-none d-xl-block">
                    <nav>
                      <div className="ltn__main-menu go-top">
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/shop">Shop</Link>
                          </li>
                          <li>
                            <Link to="/blog-grid">News</Link>
                          </li>
                          <li>
                            <Link to="#">Pages</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col d-xl-none ltn__header-options ltn__header-options-2 mb-sm-20">
                  <div className="ltn__drop-menu user-menu">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="icon-user" />
                        </Link>
                        <ul className="go-top">
                          <li>
                            <Link to="/login">Sign in</Link>
                          </li>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                          <li>
                            <Link to="/my-account">My Account</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* mini-cart */}
                  <div className="mini-cart-icon">
                    <a
                      href="#ltn__utilize-cart-menu"
                      className="ltn__utilize-toggle"
                    >
                      <i className="icon-shopping-cart"></i>
                      <sup>2</sup>
                    </a>
                  </div>
                  {/* mini-cart */}
                  {/* Mobile Menu Button */}
                  <div className="mobile-menu-toggle d-xl-none">
                    <a
                      href="#ltn__utilize-mobile-menu"
                      className="ltn__utilize-toggle"
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/">
                  <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
                </Link>
              </div>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
              <form action={"#"}>
                <input type="text" placeholder="Search..." />
                <button>
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            <div className="ltn__utilize-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/blog-grid">News</Link>
                </li>
                <li>
                  <Link to="#">Pages</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
              <ul>
                <li>
                  <Link to="/my-account" title="My Account">
                    <span className="utilize-btn-icon">
                      <i className="far fa-user" />
                    </span>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="far fa-heart" />
                      <sup>3</sup>
                    </span>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart" title="Shoping Cart">
                    <span className="utilize-btn-icon">
                      <i className="fas fa-shopping-cart" />
                      <sup>5</sup>
                    </span>
                    Shoping Cart
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ltn__social-media-2">
              <ul>
                <li>
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Linkedin">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Utilize Cart Menu Start */}
        <div
          id="ltn__utilize-cart-menu"
          className="ltn__utilize ltn__utilize-cart-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <span className="ltn__utilize-menu-title">Cart</span>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img go-top">
                  <Link to="/product-details">
                    <img
                      src={publicUrl + "assets/img/product/1.png"}
                      alt="Image"
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    <Link to="/product-details">Wheel Bearing Retainer</Link>
                  </h6>
                  <span className="mini-cart-quantity">1 x $65.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img go-top">
                  <Link to="/product-details">
                    <img
                      src={publicUrl + "assets/img/product/2.png"}
                      alt="Image"
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    <Link to="/product-details">Brake Conversion Kit</Link>
                  </h6>
                  <span className="mini-cart-quantity">1 x $85.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img go-top">
                  <Link to="/product-details">
                    <img
                      src={publicUrl + "assets/img/product/3.png"}
                      alt="Image"
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    <Link to="/product-details">OE Replica Wheels</Link>
                  </h6>
                  <span className="mini-cart-quantity">1 x $92.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img go-top">
                  <Link to="/product-details">
                    <img
                      src={publicUrl + "assets/img/product/4.png"}
                      alt="Image"
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    <Link to="/product-details">Shock Mount Insulator</Link>
                  </h6>
                  <span className="mini-cart-quantity">1 x $68.00</span>
                </div>
              </div>
            </div>
            <div className="mini-cart-footer">
              <div className="mini-cart-sub-total">
                <h5>
                  Subtotal: <span>$310.00</span>
                </h5>
              </div>
              <div className="btn-wrapper go-top">
                <Link to="/cart" className="theme-btn-1 btn btn-effect-1">
                  View Cart
                </Link>
                <Link to="/cart" className="theme-btn-2 btn btn-effect-2">
                  Checkout
                </Link>
              </div>
              <p>Free Shipping on All Orders Over $100!</p>
            </div>
          </div>
        </div>
        {/* Utilize Cart Menu End */}
      </div>
    );
  }
}

export default Navbar;
