import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { useDispatch, useSelector } from "react-redux";
import { removeCartById } from "../../../features/cart/cart";
import Categories from "./Categories";
export default function Navbar() {
  const { pathname } = useLocation();
  const [error, setError] = useState(false);
  const [keyVal, setkeyVal] = useState("");
  const [suggesation, setSuggesation] = useState([]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [cartOpen, setcartOpen] = useState(false);
  const carts = useSelector((state) => state.cart.items);
  const userInfo = useSelector((state) => state.user.items);

  useEffect(() => {
    let val = carts.reduce((acc, data) => {
      acc += data.price * data.quantity;
      return acc;
    }, 0);
    // console.log(val);
    setTotalAmount(val.toFixed(2));
  }, [carts]);
  const suggesationDrug = async (val) => {
    if (val.length > 2) {
      const obj = {
        key: val,
      };
      let params = { url: apiList.getDrugByKey, body: obj }; //console.log(params);
      let response = await ApiService.postData(params); //console.log(response);

      if (response.results.length) {
        setSuggesation(response.results);
      }
    }
  };
  const searchData = async (args) => {
    setkeyVal(args);
    setSuggesation((suggesation) => []);
  };
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(removeCartById(id));
  };
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
                      src={config.domainUrl + "/assets/img/medmart.png"}
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
                        <div className="header-contact-info text-end">
                          <ul>
                            <li>
                              <div className=" mini-cart-icon-2">
                                <Link className="ltn__utilize-toggle">
                                  <span className="mini-cart-icon font-24">
                                    <i className="fa fa-volume-control-phone"></i>
                                  </span>
                                  <h6 className="font-13 ">
                                    <span className="font-13 gray-light font-weight-400">
                                      Call us free:
                                    </span>
                                    <span className="ltn__secondary-color">
                                      920000958
                                    </span>
                                  </h6>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="ltn__search-widget mb-0 border-radius-30">
                          <form
                            onSubmit={() => {
                              if (!keyVal) {
                                setError(true);
                                return;
                              }
                            }}
                            action={"drugs"}
                          >
                            <input
                              value={keyVal}
                              type="text"
                              name="key"
                              autoComplete="off"
                              className={error ? "border-danger" : ""}
                              placeholder="Search your keyword..."
                              onKeyUp={(e) => {
                                suggesationDrug(e.target.value);
                              }}
                              onKeyDown={(e) => {
                                suggesationDrug(e.target.value);
                              }}
                              onChange={(e) => {
                                setkeyVal(e.target.value);
                              }}
                            />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                          <ul
                            className={
                              suggesation.length
                                ? "dropdown-menu block broder-radius-0 w-94 pt-0"
                                : "dropdown-menu broder-radius-0  w-94 pt-0"
                            }
                            role="menu"
                            placement="bottom-end"
                          >
                            {suggesation.length &&
                              suggesation.map((items, i) => {
                                return (
                                  <li
                                    className="list-type mt-0"
                                    onClick={() => searchData(items.name)}
                                  >
                                    <div className="d-flex flex-row">
                                      <div className="p-2">
                                        <img
                                          src={items.image_url}
                                          style={{
                                            width: "50px",
                                            height: "50px",
                                          }}
                                        />
                                      </div>
                                      <div className="p-2">
                                        <div className="text-gray font-11">
                                          {items.category}
                                        </div>
                                        <div className="text-black font-13">
                                          {items.name}
                                        </div>
                                        <div className="ltn__secondary-color">
                                          {items.price}
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-3 d-none d-xl-block">
                        <div className="ltn__header-options">
                          <ul>
                            <li>
                              <div className="mini-cart-icon mini-cart-icon-2">
                                <Link
                                  onClick={() =>
                                    setcartOpen((cartOpen) => !cartOpen)
                                  }
                                  className="ltn__utilize-toggle"
                                >
                                  <span className="mini-cart-icon">
                                    <i className="icon-shopping-cart"></i>
                                    <sup>{carts.length}</sup>
                                  </span>
                                </Link>
                                <div>
                                  <span className="mini-cart-icon font-24">
                                    <i className="icon-user"></i>
                                  </span>{" "}
                                  &nbsp;
                                  <h6 className="font-13 text-left mb-0 ml-1 ">
                                    <span className="font-13 gray-light  font-weight-400">
                                      {userInfo.hasOwnProperty("id") &&
                                      userInfo.id ? (
                                        <Link to="/account">My Account</Link>
                                      ) : (
                                        "My Account"
                                      )}
                                    </span>
                                    <br />
                                    {!userInfo.hasOwnProperty("id") &&
                                      !userInfo.id && (
                                        <span className=" text-black font-11 font-weight-300 ">
                                          <Link to="/login">Login</Link> /
                                          &nbsp;
                                          <Link to="/register">Register</Link>
                                        </span>
                                      )}
                                  </h6>
                                </div>
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
        <div className="ltn__header-middle-area  ltn__sticky-bg-white">
          <div className="container">
            <div className="row">
              <Categories />
              <div className="col header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu go-top">
                      <ul>
                        <li>
                          <Link
                            className={pathname == "/" ? "active-nav" : ""}
                            to="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              pathname == "/about-us" ? "active-nav" : ""
                            }
                            to="/about-us"
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={pathname == "/drugs" ? "active-nav" : ""}
                            to="/drugs"
                          >
                            Drugs
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              pathname == "/terms-and-conditions"
                                ? "active-nav"
                                : ""
                            }
                            to="/terms-and-conditions"
                          >
                            Terms and Conditions
                          </Link>
                        </li>

                        <li>
                          <Link
                            className={
                              pathname == "/contact-us" ? "active-nav" : ""
                            }
                            to="/contact-us"
                          >
                            Contact
                          </Link>
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
                    <sup>{carts.length}</sup>
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
                <img
                  src={config.domainUrl + "/assets/img/medmart.png"}
                  alt="Medmart"
                />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>

          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link className={pathname == "/" ? "active-nav" : ""} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={pathname == "/" ? "active-nav" : ""}
                  to="/about-us"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={pathname == "/" ? "active-nav" : ""}
                  to="/drugs"
                >
                  Drugs
                </Link>
              </li>
              <li>
                <Link
                  className={pathname == "/" ? "active-nav" : ""}
                  to="/terms-and-conditions"
                >
                  Terms and Conditions
                </Link>
              </li>

              <li>
                <Link
                  className={pathname == "/contact-us" ? "active-nav" : ""}
                  to="/contact-us"
                >
                  Contact
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
      {carts.length > 0 && (
        <div
          id="ltn__utilize-cart-menu"
          className={
            cartOpen
              ? "ltn__utilize-open ltn__utilize ltn__utilize-cart-menu"
              : "ltn__utilize ltn__utilize-cart-menu"
          }
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <span className="ltn__utilize-menu-title">Cart</span>
              <button
                onClick={() => setcartOpen((cartOpen) => !cartOpen)}
                className="ltn__utilize-close"
              >
                ×
              </button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
              {carts.map((item, i) => {
                return (
                  <div key={i} className="mini-cart-item clearfix">
                    <div className="mini-cart-img go-top">
                      <Link to={"/drug-detail/" + item.drugId}>
                        <img src={item.img} alt="Image" />
                      </Link>
                      <span
                        onClick={() => removeFromCart(item.drugId)}
                        className="mini-cart-item-delete"
                      >
                        <i className="icon-cancel" />
                      </span>
                    </div>
                    <div className="mini-cart-info go-top">
                      <h6>
                        <Link to="#">{item.name}</Link>
                      </h6>
                      <span className="mini-cart-quantity">
                        {item.quantity} x SAR {item.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mini-cart-footer">
              <div className="mini-cart-sub-total">
                <h5>
                  Subtotal: <span>SAR {totalAmount}</span>
                </h5>
              </div>
              <div className="btn-wrapper go-top">
                <Link to="/carts" className="theme-btn-1 btn-secondary btn ">
                  View Cart
                </Link>
                <Link to="/carts" className="theme-btn-2 btn-primary btn ">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
