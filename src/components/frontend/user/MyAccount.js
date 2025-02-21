import React, { useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import { Link } from "react-router-dom";
import config from "../../../config/config.json";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
export default function MyAccount() {
  const [pharmacyName, setPharmacyName] = useState("");
  const [pharmacyOwner, setPharmacyOwner] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappno, setWhatsappno] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pharmacyType, setPharmacyType] = useState("");

  const [pharmacyNameError, setPharmacyNameError] = useState("");
  const [pharmacyOwnerError, setPharmacyOwnerError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [whatsappnoError, setWhatsappnoError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [pharmacyTypeError, setPharmacyTypeError] = useState("");

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
                        className="tab-pane  fade active show"
                        id="ltn_tab_1_4"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            The following addresses will be used on the checkout
                            page by default.
                          </p>
                          <div className="ltn__form-box">
                            <form action="#">
                              <div className="row mb-50">
                                <div className="col-md-6">
                                  <label>Pharmacy name:</label>
                                  <input
                                    onChange={(e) =>
                                      setPharmacyName(e.target.value)
                                    }
                                    value={pharmacyName}
                                    type="text"
                                    name="ltn__name"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label>Pharmacy Owner:</label>
                                  <input
                                    onChange={(e) =>
                                      setPharmacyOwner(e.target.value)
                                    }
                                    value={pharmacyOwner}
                                    type="text"
                                    name="ltn__lastname"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label>Email:</label>
                                  <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    name="ltn__lastname"
                                    placeholder="Ethan"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label>Whatsapp No:</label>
                                  <input
                                    onChange={(e) =>
                                      setWhatsappno(e.target.value)
                                    }
                                    value={whatsappno}
                                    type="text"
                                    name="ltn__lastname"
                                    placeholder="example@example.com"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label>Phone No:</label>
                                  <input
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                    value={phoneNo}
                                    type="email"
                                    name="ltn__lastname"
                                    placeholder="example@example.com"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label>Pharmacy Type:</label>
                                  <select
                                    onChange={(e) =>
                                      setPharmacyType(e.target.value)
                                    }
                                    value={pharmacyType}
                                  >
                                    <option>Select</option>
                                    <option value="individual">
                                      Individual
                                    </option>
                                    <option value="chain">Chain</option>
                                  </select>
                                </div>
                              </div>

                              <div className="btn-wrapper">
                                <button
                                  type="submit"
                                  className="btn theme-btn-1 btn-primary btn-effect-1 text-uppercase"
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
