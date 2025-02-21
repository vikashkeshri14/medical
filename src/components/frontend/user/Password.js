import React, { useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import { Link } from "react-router-dom";
import config from "../../../config/config.json";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
export default function Password() {
  const userinfo = useSelector((state) => state.user.items);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonClick, setButtonClick] = useState(false);
  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");

  const changePassword = async () => {
    setButtonClick(true);
    if (!oldPassword) {
      setOldPasswordError(true);
      setButtonClick(false);
      return;
    }
    setOldPasswordError(false);
    if (!password || password.length < 6) {
      if (password.length < 6) {
        setMsgError("Passowrd should contain atleast 6 character");
      }
      setPasswordError(true);
      setButtonClick(false);
      return;
    }
    setMsgError("");
    setPasswordError(false);
    if (!confirmPassword) {
      setConfirmPassword(true);
      setButtonClick(false);
      return;
    }
    setConfirmPassword(false);

    if (confirmPassword != password) {
      setConfirmPassword(true);
      setButtonClick(false);
      setMsgError("confirm password and Password not match");
      return;
    }
    setMsgError("");
    setConfirmPassword(false);

    const obj = {
      oldpassword: oldPassword,
      password: password,
      userId: userinfo.id,
    };
    let params = { url: apiList.changePassword, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);
    if (response.status) {
      setOldPassword("");
      setPassword("");
      setConfirmPassword("");
      setMsgSuccess("Password Change Successfully");
      setButtonClick(false);
    } else {
      setOldPassword("");
      setPassword("");
      setConfirmPassword("");
      setMsgError("Old password not match with database");
      setButtonClick(false);
    }
  };

  return (
    <div className="liton__wishlist-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* PRODUCT TAB AREA START */}
            <div className="ltn__product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <SideBar />
                  </div>
                  <div className="col-lg-8">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="ltn_tab_1_9"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="account-login-inner">
                            <form
                              action="#"
                              className="ltn__form-box contact-form-box"
                            >
                              <h5 className="mb-30">Change Password</h5>
                              <p>
                                <span className="text-success">
                                  {msgSuccess}
                                </span>
                                <span className="text-danger">{msgError}</span>
                              </p>
                              <input
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                type="password"
                                name="password"
                                autoComplete="off"
                                placeholder="Current Password*"
                                className={
                                  oldPasswordError
                                    ? "mb-15 border-danger"
                                    : "mb-15"
                                }
                              />
                              <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                autoComplete="off"
                                placeholder="New Password*"
                                className={
                                  passwordError
                                    ? "mb-15 border-danger"
                                    : "mb-15"
                                }
                              />
                              <input
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                type="password"
                                autoComplete="off"
                                name="password"
                                placeholder="Confirm New Password*"
                                className={
                                  confirmPasswordError
                                    ? "mb-15 border-danger"
                                    : "mb-15"
                                }
                              />
                              <div className="btn-wrapper mt-0">
                                <button
                                  disabled={buttonClick}
                                  onClick={() => {
                                    changePassword();
                                  }}
                                  className="theme-btn-1 btn-primary btn btn-block"
                                  type="button"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PRODUCT TAB AREA END */}
          </div>
        </div>
      </div>
    </div>
  );
}
