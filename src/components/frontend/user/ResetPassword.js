import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { useDispatch } from "react-redux";
import { LoginInfo } from "../../../features/user/user";

export default function ResetPasswordContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [foremail, setForEmail] = useState("");

  const [foremailError, setForEmailError] = useState(false);
  const ForgetPass = async () => {
    if (!foremail) {
      setForEmailError(true);
      return;
    }
    setForEmailError(false);
    const obj = {
      email: foremail,
    };
    let params = { url: apiList.loginUser, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);
  };
  const Login = async () => {
    if (!email) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    if (!password) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    const obj = {
      email: email,
      password: password,
    };
    let params = { url: apiList.loginUser, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);
    //console.log(response);
    if (response.status) {
      dispatch(LoginInfo(response.results));
      navigate("/account"); //console.log(response);
    } else {
      setMsgError("Email/password enter wrong");
    }
  };
  return (
    <div>
      <div className="ltn__login-area pt-50 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">Welcome Back!</h1>
                <p className="secondary">Sign In To Your Account</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="account-login-inner">
                <form method="GET" className="ltn__form-box contact-form-box">
                  <div className="mb-3">
                    <label className="form-label">Email/Phone number</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      name="email"
                      placeholder="Email/phone number"
                      className={emailError ? "border-danger" : ""}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="Password*"
                      className={passwordError ? "border-danger" : ""}
                    />
                    <p className="text-danger">{msgError}</p>
                  </div>

                  <div className="btn-wrapper mt-0">
                    <button
                      onClick={() => Login()}
                      className="theme-btn-1 btn-primary btn btn-block"
                      type="button"
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="go-to-btn mt-20">
                    <a
                      href="#"
                      title="Forgot Password?"
                      data-bs-toggle="modal"
                      data-bs-target="#ltn_forget_password_modal"
                    >
                      <small className="secondary">
                        FORGOTTEN YOUR PASSWORD?
                      </small>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account-create text-center pt-50">
                <h4>DON'T HAVE AN ACCOUNT?</h4>
                <p>
                  Add items to your wishlist personalised recommendations
                  <br />
                  check out more quickly track your orders register
                </p>
                <div className="btn-wrapper go-top">
                  <Link
                    to="/register"
                    className="theme-btn-1 btn-primary btn black-btn"
                  >
                    CREATE ACCOUNT
                  </Link>{" "}
                  &nbsp;{" "}
                  <Link
                    to="/"
                    className="theme-btn-1 btn-outline-primary btn black-btn"
                  >
                    Continue as guest
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__modal-area ltn__add-to-cart-modal-area----">
        <div
          className="modal fade"
          id="ltn_forget_password_modal"
          tabIndex={-1}
        >
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="modal-product-info text-center">
                          <h4>FORGET PASSWORD?</h4>
                          <p className="added-cart text-start">
                            Enter you register email.
                          </p>
                          <form action="#" className="ltn__form-box">
                            <div className="mb-3">
                              <input
                                value={foremail}
                                type="text"
                                onChange={(e) => setForEmail(e.target.value)}
                                name="email"
                                placeholder="Type your register email"
                                className={
                                  foremailError
                                    ? " border-danger mb-20"
                                    : "mb-20"
                                }
                              />
                              <div className="form-text">
                                Password reset link send to your email
                              </div>
                            </div>

                            <div className="btn-wrapper mt-0">
                              <button
                                className="theme-btn-1 btn-primary btn btn-full-width-2"
                                type="button"
                                onClick={() => ForgetPass()}
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                        {/* additional-info */}
                        <div className="additional-info d-none">
                          <p>
                            We want to give you <b>10% discount</b> for your
                            first order, <br /> Use discount code at checkout
                          </p>
                          <div className="payment-method">
                            <img
                              src={"/assets/img/icons/payment.png"}
                              alt="#"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
