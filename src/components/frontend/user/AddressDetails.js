import React from "react";
import { Link } from "react-router-dom";
import config from "../../../config/config.json";
import SideBar from "./SideBar";
export default function AddressDetails() {
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
                        id="ltn_tab_1_3"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            The following addresses will be used on the checkout
                            page by default.
                          </p>
                          <div className="row">
                            <div className="col-md-6 col-12 learts-mb-30">
                              <h4>
                                Billing Address{" "}
                                <small>
                                  <Link to="#">edit</Link>
                                </small>
                              </h4>
                              <address>
                                <p>
                                  <strong>Alex Tuntuni</strong>
                                </p>
                                <p>
                                  1355 Market St, Suite 900 <br />
                                  San Francisco, CA 94103
                                </p>
                                <p>Mobile: (123) 456-7890</p>
                              </address>
                            </div>
                            <div className="col-md-6 col-12 learts-mb-30">
                              <h4>
                                Shipping Address{" "}
                                <small>
                                  <Link to="#">edit</Link>
                                </small>
                              </h4>
                              <address>
                                <p>
                                  <strong>Alex Tuntuni</strong>
                                </p>
                                <p>
                                  1355 Market St, Suite 900 <br />
                                  San Francisco, CA 94103
                                </p>
                                <p>Mobile: (123) 456-7890</p>
                              </address>
                            </div>
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
