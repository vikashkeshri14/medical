import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
export default function RegisterContent() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [wphone, setWphone] = useState("");
  const [tax, setTax] = useState("");
  const [email, setEmail] = useState("");
  const [pharmacyType, setPharmacyType] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [ownerError, setOwnerError] = useState(false);
  const [wphoneError, setWphoneError] = useState(false);
  const [taxError, setTaxError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pharmacyTypeError, setPharmacyTypeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [cpasswordError, setCpasswordError] = useState(false);
  const [next, setNext] = useState(false);
  const [otp, setOtp] = useState("");
  const [msgemai, setEmailValidMessage] = useState("");
  const [msgphone, setMsgphone] = useState("");
  const [msgPassword, setMsgPassword] = useState("");
  const [msgcPassword, setMsgcPassword] = useState("");
  const [emailExist, setemailExist] = useState(false);
  const [phoneExist, setphoneExist] = useState(false);
  const [whatsappExist, setwhatsappExist] = useState(false);
  const [msgwhatsapp, setmsgwhatsapp] = useState("");
  const [nextTrue, setnextTrue] = useState(false);

  const navigate = useNavigate();
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const checkemail = async () => {
    if (validateEmail(email)) {
      const obj = {
        email: email,
      };
      let params = { url: apiList.checkEmailUser, body: obj }; //console.log(params);
      let response = await ApiService.postData(params);
      if (response.status == true) {
        setEmailValidMessage("Email already register");
        setemailExist(true);
      } else {
        setEmailValidMessage("");
        setemailExist(false);
        return 0;
      }
    } else {
      setemailExist(true);
      setEmailValidMessage("enter valid email");
      return 1;
    }
  };
  const checkphone = async () => {
    const obj = {
      phone: phone,
    };
    let params = { url: apiList.checkPhoneUser, body: obj }; //console.log(params);
    let response = await ApiService.postData(params); //console.log(response);
    if (response.status == true) {
      setMsgphone("Phone already exist");
      setphoneExist(true);
    } else {
      setMsgphone("");
      setphoneExist(false);
    }
  };
  const checkWhatsapp = async () => {
    const obj = {
      whatsapp: wphone,
    };
    let params = { url: apiList.checkWhatsaapUser, body: obj }; //console.log(params);
    let response = await ApiService.postData(params); //console.log(response);
    if (response.status == true) {
      setmsgwhatsapp("Phone already exist");
      setwhatsappExist(true);
    } else {
      setmsgwhatsapp("");
      setwhatsappExist(false);
    }
  };
  const acceptOnlyNum = (phone, args) => {
    const value = phone.replace(/\D/g, "");
    if (args == "phone") {
      setPhone(phone);
    } else {
      setWphone(value);
    }
  };

  const handleNext = () => {
    setnextTrue(true);
    if (!name) {
      setNameError(true);
      setnextTrue(false);
      return;
    }
    setNameError(false);
    if (!owner) {
      setOwnerError(true);
      setnextTrue(false);
      return;
    }
    setOwnerError(false);
    if (!wphone) {
      setWphoneError(true);
      setnextTrue(false);
      return;
    }
    setWphoneError(false);
    if (!tax) {
      setTaxError(true);
      setnextTrue(false);
      return;
    }
    setTaxError(false);
    if (!email) {
      setEmailError(true);
      setnextTrue(false);
      return;
    }
    setEmailError(false);
    if (!pharmacyType) {
      setPharmacyTypeError(true);
      setnextTrue(false);
      return;
    }
    setPharmacyTypeError(false);
    if (!password || password.length < 6) {
      if (password.length < 6) {
        setMsgPassword("Password should contain six character long ");
      }
      setPasswordError(true);
      setnextTrue(false);
      return;
    }
    setMsgPassword("");
    setPasswordError(false);

    if (!cpassword || cpassword.length < 6) {
      if (cpassword.length < 6) {
        setMsgcPassword("Password should contain six character long ");
      }
      setCpasswordError(true);
      setnextTrue(false);
      return;
    }
    setMsgcPassword("");
    setCpasswordError(false);
    if (cpassword != cpassword) {
      setMsgcPassword("Password not match ");
      setCpasswordError(true);
      setnextTrue(false);
      return;
    }
    setMsgcPassword("");
    setCpasswordError(false);

    if (whatsappExist) {
      setWphoneError(true);
      setnextTrue(false);
      return;
    }
    setWphoneError(false);
    if (emailExist) {
      setEmailError(true);
      setnextTrue(false);
      return;
    }
    setEmailError(false);
    setnextTrue(false);
    setNext(true);
  };
  const handleChange = (otp) => setOtp(otp);

  const verify = () => {};

  const AddUser = async () => {
    setnextTrue(true);
    if (!phone) {
      setPhoneError(true);
      setnextTrue(false);
      return;
    }
    if (phoneExist) {
      setPhoneError(true);
      setnextTrue(false);
      return;
    }
    setPhoneError(false);
    setnextTrue(false);

    const obj = {
      pharmacy_name: name,
      pharmacy_owner_name: owner,
      whatsapp: wphone,
      email: email,
      phone: phone,
      tax_no: tax,
      pharmacy_type: pharmacyType,
      password: password,
    };
    let params = { url: apiList.registration, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);
    console.log(response);
    if (response.status) {
      localStorage.setItem("loginInfo", JSON.stringify(response.results));
      return navigate("/account");
    }
  };

  return (
    <div className="ltn__login-area pt-50 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center mb-10">
              <h1 className="section-title">Create an account</h1>
              <p className="secondary">Contact Information</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <form action="#" className="ltn__form-box contact-form-box">
                <div className={next ? "d-none" : ""}>
                  <div className="mb-3">
                    <label className="form-label">Pharmacy Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Pharmacy Name"
                      className={nameError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Pharmacy Owner Name</label>
                    <input
                      value={owner}
                      type="text"
                      onChange={(e) => setOwner(e.target.value)}
                      placeholder="Pharmacy Owner Name"
                      className={ownerError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">WhatsApp Number</label>
                    <input
                      onBlur={() => checkWhatsapp()}
                      value={wphone}
                      type="text"
                      onChange={(e) => acceptOnlyNum(e.target.value, "whats")}
                      name="lastname"
                      placeholder="WhatsApp Number"
                      className={wphoneError ? "mb-1 border-danger" : "mb-1"}
                    />
                    <p className="text-danger">{msgwhatsapp}</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tax number</label>
                    <input
                      value={tax}
                      type="text"
                      onChange={(e) => setTax(e.target.value)}
                      name="lastname"
                      placeholder="Tax number"
                      className={taxError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      onBlur={() => checkemail()}
                      value={email}
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder="Email"
                      className={emailError ? "mb-1 border-danger" : "mb-1"}
                    />
                    <p className="text-danger">{msgemai}</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Pharmacy Type</label>
                    <select
                      value={pharmacyType}
                      onChange={(e) => setPharmacyType(e.target.value)}
                      className={
                        pharmacyTypeError
                          ? "form-control  border-danger mb-1"
                          : "form-control mb-1"
                      }
                    >
                      <option>Pharmacy Type</option>
                      <option value="individual">Individual</option>
                      <option value="chain">Chain</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={passwordError ? "mb-1 border-danger" : "mb-1"}
                    />
                    <p className="text-danger">{msgPassword}</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value)}
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      className={cpasswordError ? "mb-1 border-danger" : "mb-1"}
                    />
                    <p className="text-danger">{msgcPassword}</p>
                  </div>

                  <div className="btn-wrapper">
                    <button
                      disabled={nextTrue}
                      onClick={() => handleNext()}
                      className="theme-btn-1 btn btn-primary reverse-color btn-block"
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className={!next ? "d-none" : ""}>
                  <p>Phone Number Verification</p>

                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Mobile Number
                    </label>
                    <input
                      onChange={(e) => acceptOnlyNum(e.target.value, "phone")}
                      value={phone}
                      type="text"
                      class={
                        phoneError
                          ? "form-control border-danger"
                          : "form-control"
                      }
                      id="exampleFormControlInput1"
                      placeholder="Mobile number"
                    />
                    <div className="form-text">
                      This number will be used to sign in on website and mobile
                      application
                    </div>
                    <button
                      onClick={() => verify()}
                      className="theme-btn-1 btn btn-outline-success reverse-color btn-block"
                      type="button"
                    >
                      Verify
                    </button>
                  </div>

                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Otp Code
                    </label>
                    <OtpInput
                      value={otp}
                      onChange={handleChange}
                      numInputs={4}
                      renderSeparator={<span style={{ width: "8px" }}></span>}
                      isInputNum={true}
                      shouldAutoFocus={true}
                      inputStyle={{
                        borderRadius: "8px",
                        width: "54px",
                        height: "54px",
                        fontSize: "15px",
                        padding: "0",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "blue",
                      }}
                      focusStyle={{
                        border: "1px solid #CFD3DB",
                        outline: "none",
                      }}
                      renderInput={(props) => <input {...props} />}
                    />
                    <div className="form-text">
                      Didn’t receive the code?RESEND
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <button
                      onClick={() => setNext((next) => !next)}
                      className="theme-btn-1 btn btn-secondary reverse-color btn-block"
                      type="button"
                    >
                      Back
                    </button>
                    &nbsp;
                    <button
                      disabled={nextTrue}
                      className="theme-btn-1 btn btn-primary reverse-color btn-block"
                      type="button"
                      onClick={() => AddUser()}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
              <div className="by-agree text-center">
                <p>By creating an account, you agree to our:</p>
                <p>
                  <a href="#">
                    TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                    POLICY
                  </a>
                </p>
                <div className="go-to-btn mt-50 go-top">
                  <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
