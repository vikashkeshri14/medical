import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart, updateCart } from "../../../features/cart/cart";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { LoginInfo } from "../../../features/user/user";
import Payment from "./Payment";
import Coupon from "./Coupon";
export default function CheckoutDetails() {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const userinfo = useSelector((state) => state.user.items);
  const [email, setEmail] = useState("");
  const [msgError, setMsgError] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
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
      // navigate("/account"); //console.log(response);
    } else {
      setMsgError("Wrong email / phone number or password");
    }
  };
  return (
    <div className="ltn__checkout-area mt-50 mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__checkout-inner">
              {!userinfo.hasOwnProperty("id") && (
                <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                  <h5>
                    <a
                      className="ltn__secondary-color"
                      data-bs-toggle="collapse"
                    >
                      Please login to continue
                    </a>
                  </h5>
                  <div
                    id="ltn__returning-customer-login"
                    className=" show ltn__checkout-single-content-info"
                  >
                    <div className="ltn_coupon-code-form ltn__form-box">
                      <p>Please login your accont.</p>
                      <form action="#">
                        <div className="row">
                          <p className="text-danger">{msgError}</p>
                          <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                              <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                name="ltn__name"
                                className={emailError ? "border-danger" : ""}
                                placeholder="Email / phone number"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-password ltn__custom-icon">
                              <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="ltn__email"
                                className={passwordError ? "border-danger" : ""}
                                placeholder="Enter password"
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => Login()}
                          className="btn mt-2 theme-btn-1 btn-effect btn-primary 
                        text-uppercase"
                        >
                          Login
                        </button>
                        <label className="input-info-save pt-2 mb-0">
                          <input type="checkbox" name="agree" /> Remember me
                        </label>

                        <p className="mt-30">
                          <a href="register.html">Lost your password?</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {userinfo.hasOwnProperty("id") && <Coupon />}
            </div>
          </div>
          {userinfo.hasOwnProperty("id") && <Payment />}
        </div>
      </div>
    </div>
  );
}
