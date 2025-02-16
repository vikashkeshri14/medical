import React, { useState, useEffect } from "react";
import * as ApiService from "../../../config/config";
import config from "../../../config/config.json";
import apiList from "../../../config/apiList.json";
export default function NewsLetter() {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");
  const [button, setButton] = useState(false);
  const subscribe = async () => {
    setButton(true);
    if (!email) {
      setEmailError(true);
      setMessageError("Please enter valid email!");
      setButton(false);
      return;
    }
    setMessageError("");
    setEmailError(false);

    const obj = {
      email: email,
    };

    let params = { url: apiList.subscribe, body: obj };
    let response = await ApiService.postData(params);
    if (response.status) {
      setEmail("");
      setMessageSuccess("Successfully subscribe!");
      setMessageError("");
      setButton(false);
    } else {
      setEmail("");
      setMessageSuccess("");
      setMessageError("Email already exist!");
      setButton(false);
    }
  };
  return (
    <div className=" section-bg-primary">
      <div className="container">
        <div className="row pt-20 pb-20">
          <div className="col-md-6">
            <div className="d-flex flex-row align-items-center">
              <div className="pr-10">
                <img
                  style={{ width: "95%" }}
                  src={
                    config.domainUrl + "/assets/img/others/icon-envelope-2.png"
                  }
                  alt="newslertter"
                />
              </div>
              <div className="align-items-center">
                <h6 className="text-uppercase font-30 text-white">
                  sign up for newsletter
                </h6>
                <p className="font-12 text-white font-weight-600 mb-0">
                  Get in now with a 30% finance deal from us
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-newsletter">
              <form action="#">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <div className="btn-wrapper">
                  <button
                    disabled={button}
                    onClick={() => {
                      subscribe();
                    }}
                    className="theme-btn-1 bg-black btn"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <span className="text-danger">{messageError}</span>
              <span className="text-success">{messageSuccess}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
