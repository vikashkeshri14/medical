import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../config/config.json";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
export default function AddressDetails() {
  const userinfo = useSelector((state) => state.user.items);
  const [billingShow, setBillingShow] = useState(false);
  const [shippingShow, setShippingShow] = useState(false);
  const [toName, setToName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [zipError, setZipError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [toNameError, setToNameError] = useState("");

  const [id, setId] = useState("");
  const [baddress, setBaddress] = useState("");
  const [bcity, setBcity] = useState("");
  const [bzip, setBzip] = useState("");
  const [bphone, setBphone] = useState("");
  const [btoName, setBToName] = useState("");

  const [baddressError, setBaddressError] = useState(false);
  const [bcityError, setBcityError] = useState(false);
  const [bzipError, setBzipError] = useState(false);
  const [bphoneError, setBphoneError] = useState(false);
  const [btoNameError, setBToNameError] = useState(false);

  const [bid, setBid] = useState("");

  useEffect(() => {
    getAddress();
  }, []);
  const getAddress = async () => {
    const obj = {
      type: "2",
      user_id: userinfo.id,
    };
    let params = { url: apiList.getAddress, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);
    let addinfo = response.results;
    if (addinfo.length) {
      setAddress(addinfo[0].address);
      setZip(addinfo[0].zipcode);
      setCity(addinfo[0].city);
      setPhone(addinfo[0].phone);
      setToName(addinfo[0].toName);
    }

    const objb = {
      type: "1",
      user_id: userinfo.id,
    };
    let paramsb = { url: apiList.getAddress, body: objb }; //console.log(params);
    let responseb = await ApiService.postData(paramsb);
    let addinfob = responseb.results;
    if (addinfob.length) {
      setBaddress(addinfob[0].address);
      setBzip(addinfob[0].zipcode);
      setBcity(addinfob[0].city);
      setBphone(addinfob[0].phone);
      setBToName(addinfob[0].toName);
    }
  };

  const updateBilling = async () => {
    if (!btoName) {
      setBToNameError(true);
      return;
    }
    setBToNameError(false);
    if (!baddress) {
      setBaddressError(true);
      return;
    }
    setBaddressError(false);
    if (!bphone) {
      setBphoneError(true);
      return;
    }
    setBphoneError(false);
    if (!bcity) {
      setBcityError(true);
      return;
    }
    setBcityError(false);

    if (!bzip) {
      setBzipError(true);
      return;
    }
    setBzipError(false);

    const obj = {
      toName: btoName,
      address: baddress,
      phone: bphone,
      city: bcity,
      zip: bzip,
      type: "1",
      user_id: userinfo.id,
    };
    let params = { url: apiList.updateAddress, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);
    if (response) {
      getAddress();
      setBillingShow(false);
    }
    //console.log(response);
  };
  const updateShipping = async () => {
    if (!toName) {
      setToNameError(true);
      return;
    }
    setToNameError(false);
    if (!address) {
      setAddressError(true);
      return;
    }
    setAddressError(false);
    if (!phone) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);
    if (!city) {
      setCityError(true);
      return;
    }
    setCityError(false);

    if (!zip) {
      setZipError(true);
      return;
    }
    setZipError(false);

    const obj = {
      toName: toName,
      address: address,
      phone: phone,
      city: city,
      zip: zip,
      type: "2",
      user_id: userinfo.id,
    };
    let params = { url: apiList.updateAddress, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);

    if (response) {
      getAddress();
      setShippingShow(false);
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
                                  <Link
                                    onClick={() =>
                                      setBillingShow(
                                        (billingShow) => !billingShow
                                      )
                                    }
                                  >
                                    edit
                                  </Link>
                                </small>
                              </h4>
                              {!billingShow && (
                                <address>
                                  <p>
                                    <strong>{btoName}</strong>
                                  </p>
                                  <p>
                                    {baddress} <br />
                                    {bcity}, {bzip}
                                  </p>
                                  <p> {bphone && "Mobile:" + bphone}</p>
                                </address>
                              )}
                              {billingShow && (
                                <div className="row mb-50">
                                  <div className="col-md-12 mb-3">
                                    <label>To</label>
                                    <input
                                      onChange={(e) =>
                                        setBToName(e.target.value)
                                      }
                                      value={btoName}
                                      type="text"
                                      name="ltn__name"
                                      className={
                                        btoNameError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label>Address</label>
                                    <textarea
                                      onChange={(e) =>
                                        setBaddress(e.target.value)
                                      }
                                      value={baddress}
                                      type="text"
                                      name="ltn__name"
                                      style={{ height: "80px" }}
                                      className={
                                        baddressError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    ></textarea>
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label>Phone</label>
                                    <input
                                      onChange={(e) =>
                                        setBphone(e.target.value)
                                      }
                                      value={bphone}
                                      type="text"
                                      name="ltn__name"
                                      className={
                                        bphoneError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label>City</label>
                                    <input
                                      onChange={(e) => setBcity(e.target.value)}
                                      value={bcity}
                                      type="text"
                                      name="ltn__name"
                                      className={
                                        bcityError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label>Zip</label>
                                    <input
                                      onChange={(e) => setBzip(e.target.value)}
                                      value={bzip}
                                      type="text"
                                      name="ltn__name"
                                      className={
                                        bzipError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    />
                                  </div>
                                  <div className="btn-wrapper">
                                    <button
                                      type="button"
                                      onClick={() => updateBilling()}
                                      className="btn theme-btn-1 btn-primary btn-effect text-uppercase"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="col-md-6 col-12 learts-mb-30">
                              <h4>
                                Shipping Address{" "}
                                <small>
                                  <Link
                                    onClick={() =>
                                      setShippingShow(
                                        (shippingShow) => !shippingShow
                                      )
                                    }
                                  >
                                    edit
                                  </Link>
                                </small>
                              </h4>
                              {!shippingShow && (
                                <address>
                                  <p>
                                    <strong>{toName}</strong>
                                  </p>
                                  <p>
                                    {address} <br />
                                    {city}, {zip}
                                  </p>
                                  <p> {phone && "Mobile:" + phone}</p>
                                </address>
                              )}
                              {shippingShow && (
                                <div className="row mb-50">
                                  <div className="col-md-12 mb-3">
                                    <label>To</label>
                                    <input
                                      onChange={(e) =>
                                        setToName(e.target.value)
                                      }
                                      value={toName}
                                      type="text"
                                      name="ltn__name"
                                      className={
                                        toNameError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label>Address</label>
                                    <textarea
                                      onChange={(e) =>
                                        setAddress(e.target.value)
                                      }
                                      value={address}
                                      type="text"
                                      name="ltn__name"
                                      style={{ height: "80px" }}
                                      className={
                                        addressError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    ></textarea>
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label>Phone</label>
                                    <input
                                      onChange={(e) => setPhone(e.target.value)}
                                      value={phone}
                                      type="text"
                                      name="ltn__name"
                                      className={
                                        phoneError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label>City</label>
                                    <input
                                      onChange={(e) => setCity(e.target.value)}
                                      value={city}
                                      type="text"
                                      name="ltn__name"
                                      className={
                                        cityError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    />
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label>Zip</label>
                                    <input
                                      onChange={(e) => setZip(e.target.value)}
                                      value={zip}
                                      type="text"
                                      name="ltn__name"
                                      className={
                                        zipError
                                          ? "form-control border-danger"
                                          : "form-control"
                                      }
                                    />
                                  </div>
                                  <div className="btn-wrapper">
                                    <button
                                      type="button"
                                      onClick={() => updateShipping()}
                                      className="btn theme-btn-1 btn-primary btn-effect text-uppercase"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              )}
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
