import React from "react";
import { Link } from "react-router-dom";
import config from "../../../config/config.json";
import SideBar from "./SideBar";
export default function Password() {
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
                              <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                placeholder="Current Password*"
                                className="mb-15"
                              />
                              <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                placeholder="New Password*"
                                className="mb-15"
                              />
                              <input
                                type="password"
                                autoComplete="off"
                                name="password"
                                placeholder="Confirm New Password*"
                                className="mb-15"
                              />
                              <div className="btn-wrapper mt-0">
                                <button
                                  className="theme-btn-1 btn-primary btn btn-block"
                                  type="submit"
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
