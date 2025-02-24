import React, { useEffect, useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import { Link } from "react-router-dom";
import config from "../../../config/config.json";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
export default function MyAccount() {
  const userinfo = useSelector((state) => state.user.items);
  const [pharmacyName, setPharmacyName] = useState("");
  const [pharmacyOwner, setPharmacyOwner] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappno, setWhatsappno] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pharmacyType, setPharmacyType] = useState("");
  const [tax, setTax] = useState("");
  const [taxError, setTaxError] = useState("");
  const [pharmacyNameError, setPharmacyNameError] = useState("");
  const [pharmacyOwnerError, setPharmacyOwnerError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [whatsappnoError, setWhatsappnoError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [pharmacyTypeError, setPharmacyTypeError] = useState("");
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  useEffect(() => {
    const fetchItemById = async () => {
      const obj = {
        id: userinfo.id,
      };
      let params = { url: apiList.getUserById, body: obj }; //console.log(params);
      let response = await ApiService.postData(params);
      const data = await response.results;
      if (data.length) setEmail(data[0].email);
      setPharmacyName(data[0].pharmacy_name);
      setPharmacyOwner(data[0].pharmacy_owner_name);
      setWhatsappno(data[0].whatsapp);
      setPhoneNo(data[0].phone);
      setTax(data[0].tax_no);
      setPharmacyType(data[0].pharmacy_type);
    };
    fetchItemById();
  }, []);

  const updateProfile = async () => {
    if (!pharmacyName) {
      setPharmacyNameError(true);
      return;
    }
    setPharmacyNameError(false);
    if (!pharmacyOwner) {
      setPharmacyOwnerError(true);
      return;
    }
    setPharmacyOwnerError(false);

    if (!email) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    if (!whatsappno) {
      setWhatsappnoError(true);
      return;
    }
    setWhatsappnoError(false);
    if (!phoneNo) {
      setPhoneNoError(true);
      return;
    }
    setPhoneNoError(false);
    if (!tax) {
      setTaxError(true);
      return;
    }
    setTaxError(false);
    if (!tax) {
      setTaxError(true);
      return;
    }
    setTaxError(false);

    if (!pharmacyType) {
      setPharmacyTypeError(true);
      return;
    }
    setPharmacyTypeError(false);

    const obj = {
      pharmacy_name: pharmacyName,
      pharmacy_owner_name: pharmacyOwner,
      whatsapp: whatsappno,
      tax_no: tax,
      email: email,
      pharmacy_type: pharmacyType,
      id: userinfo.id,
    };
    console.log(obj);

    let params = { url: apiList.updateUser, body: obj };
    let response = await ApiService.postData(params);
    const data = await response.results;
    if (response.status) {
      setMsgSuccess("Updated Successfully");
      setTimeout(() => {
        setMsgSuccess("");
        setEmailError("");
      }, 2000);
    } else {
      setMsgError("Whatsapp number already exists");
      setTimeout(() => {
        setMsgSuccess("");
        setEmailError("");
      }, 2000);
    }
    //console.log(response);
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
                        className="tab-pane  fade active show"
                        id="ltn_tab_1_4"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <h3>Personal Information</h3>
                          <p className="p-0">
                            <span className="text-success">{msgSuccess}</span>
                            <span className="text-danger">{msgError}</span>
                          </p>
                          <div className="ltn__form-box">
                            <form action="#">
                              <div className="row mb-50">
                                <div className="col-md-6 mb-3">
                                  <label>Pharmacy name:</label>
                                  <input
                                    onChange={(e) =>
                                      setPharmacyName(e.target.value)
                                    }
                                    value={pharmacyName}
                                    type="text"
                                    name="ltn__name"
                                    className={
                                      pharmacyNameError ? "border-danger" : ""
                                    }
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label>Pharmacy Owner:</label>
                                  <input
                                    onChange={(e) =>
                                      setPharmacyOwner(e.target.value)
                                    }
                                    value={pharmacyOwner}
                                    type="text"
                                    name="ltn__lastname"
                                    className={
                                      pharmacyOwnerError ? "border-danger" : ""
                                    }
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label>Email:</label>
                                  <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    name="ltn__lastname"
                                    placeholder="Email"
                                    className={
                                      emailError ? "border-danger" : ""
                                    }
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label>Whatsapp No:</label>
                                  <input
                                    onChange={(e) =>
                                      setWhatsappno(e.target.value)
                                    }
                                    value={whatsappno}
                                    type="text"
                                    name="ltn__lastname"
                                    placeholder="Whatsapp number"
                                    className={
                                      whatsappnoError ? "border-danger" : ""
                                    }
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label>Phone No:</label>
                                  <input
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                    value={phoneNo}
                                    type="text"
                                    name="ltn__lastname"
                                    placeholder="Phone number"
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label>Tax No:</label>
                                  <input
                                    onChange={(e) => setTax(e.target.value)}
                                    value={tax}
                                    type="text"
                                    name="ltn__lastname"
                                    placeholder="Tax No"
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label>Pharmacy Type:</label>
                                  <select
                                    className="form-control"
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
                                  type="button"
                                  onClick={() => updateProfile()}
                                  className="btn theme-btn-1 btn-primary btn-effect text-uppercase"
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
