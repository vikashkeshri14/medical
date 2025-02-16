import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
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
  const [emailError, setEmailError] = useState(false);
  const [pharmacyTypeError, setPharmacyTypeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [cpasswordError, setCpasswordError] = useState(false);

  const [next, setNext] = useState(false);
  const [otp, setOtp] = useState("");
  const handleNext = () => {
    setNext(true);
    if (!name) {
      setNameError(true);
      return;
    }
    setNameError(false);
    if (!owner) {
      setOwnerError(true);
      return;
    }
    setOwnerError(false);
    if (!wphone) {
      setWphoneError(true);
      return;
    }
    setWphoneError(false);
    if (!tax) {
      setTaxError(true);
      return;
    }
    setTaxError(false);
    if (!email) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    if (!pharmacyType) {
      setPharmacyTypeError(true);
      return;
    }
    setPharmacyTypeError(false);
    if (!password) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };
  const handleChange = (otp) => setOtp(otp);

  const verify = () => {};

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
              <form
                action="#"
                className="ltn__form-box contact-form-box"
              >
                <div className={next ? "d-none" : ""}>
                  <div class="mb-3">
                    <label class="form-label">Pharmacy Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Pharmacy Name"
                      className={nameError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Pharmacy Owner Name</label>
                    <input
                      value={owner}
                      type="text"
                      onChange={(e) => setOwner(e.target.value)}
                      placeholder="Pharmacy Owner Name"
                      className={ownerError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">WhatsApp Number</label>
                    <input
                      value={wphone}
                      type="text"
                      onChange={(e) => setWphone(e.target.value)}
                      name="lastname"
                      placeholder="WhatsApp Number"
                      className={wphoneError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Tax number</label>
                    <input
                      value={tax}
                      type="text"
                      onChange={(e) => setTax(e.target.value)}
                      name="lastname"
                      placeholder="Tax number"
                      className={taxError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input
                      value={email}
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder="Email"
                      className={emailError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Pharmacy Type</label>
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
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={passwordError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Confirm Password</label>
                    <input
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value)}
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      className={cpasswordError ? "mb-1 border-danger" : "mb-1"}
                    />
                  </div>

                  <div className="btn-wrapper">
                    <button
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

                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Mobile number"
                    />
                    <div class="form-text">
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

                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label"
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
                    <div class="form-text">Didn’t receive the code?RESEND</div>
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
                      className="theme-btn-1 btn btn-primary reverse-color btn-block"
                      type="button"
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
