import React, { useEffect, useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
export default function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitTrue, setSubmitTrue] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");
  //const [success, setSuccess] = useState(false);

  const addContact = async () => {
    setSubmitTrue(true);
    if (!name) {
      setNameError(true);
      setSubmitTrue(false);
      return;
    }
    setNameError(false);
    if (!email) {
      setEmailError(true);
      setSubmitTrue(false);
      return;
    }
    setEmailError(false);
    if (!phone) {
      setPhoneError(true);
      setSubmitTrue(false);
      return;
    }
    setPhoneError(false);

    if (!message) {
      setMessageError(true);
      setSubmitTrue(false);
      return;
    }
    setMessageError(false);

    const obj = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    //console.log(obj);

    let params = { url: apiList.addcontact, body: obj };
    //console.log(params);
    let response = await ApiService.postData(params);
    if (response.status) {
      setMessageSuccess("Message Sent Successfully!!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmitTrue(false);
    } else {
      setMessageSuccess("Please try again");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmitTrue(false);
    }
    //console.log(response);
  };

  return (
    <div className="ltn__contact-message-area mb-20 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__form-box contact-form-box box-shadow white-bg">
              <h4 className="title-2">Contact Us</h4>
              <form id="contact-form" action={"mail.php"} method="post">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        value={name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        className={nameError ? "mb-15 border-danger" : "mb-15"}
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-email ltn__custom-icon">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        className={emailError ? "mb-15 border-danger" : "mb-15"}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-item input-item-phone ltn__custom-icon">
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={phoneError ? "mb-15 border-danger" : "mb-15"}
                        type="text"
                        name="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-item input-item-textarea ltn__custom-icon">
                  <textarea
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className={messageError ? "mb-15 border-danger" : "mb-15"}
                    placeholder="Enter message"
                  />
                </div>

                <div className="btn-wrapper mt-0">
                  <button
                    disabled={submitTrue}
                    className="btn btn-primary  text-uppercase"
                    type="button"
                    onClick={() => {
                      addContact();
                    }}
                  >
                    Submit
                  </button>
                </div>
                <p className="form-messege mb-0 text-success mt-20">
                  {messageSuccess}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
