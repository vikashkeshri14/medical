import React, { useEffect, useState } from "react";
import {
  CContainer,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from "@coreui/react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import { useNavigate, useParams } from "react-router-dom";
export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [submitTrue, setSubmitTrue] = useState(false);
  const [msgemai, setEmailValidMessage] = useState("");
  const [msgphone, setMsgphone] = useState("");
  const [msgPassword, setMsgPassword] = useState("");
  const [emailExist, setemailExist] = useState(false);
  const [phoneExist, setphoneExist] = useState(false);
  const slug = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchItems = async () => {
      const obj = {
        id: slug.id,
      };
      let params = { url: apiList.getAdminById, body: obj }; //console.log(params);
      let response = await ApiService.postData(params);
      let data = response.results;
      //console.log(response);
      if (data.length) {
        setName(data[0].name);
        setEmail(data[0].email);
        setPhone(data[0].phone);
        setType(data[0].role);
      } else {
        navigate("/admin");
      }
    };
    fetchItems();
  }, [slug.id]);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const checkemail = async () => {
    if (validateEmail(email)) {
      const obj = {
        email: email,
        id: slug.id,
      };
      let params = { url: apiList.checkEmail, body: obj }; //console.log(params);
      let response = await ApiService.postData(params);
      //console.log(response);

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
      id: slug.id,
    };
    let params = { url: apiList.checkPhone, body: obj }; //console.log(params);
    let response = await ApiService.postData(params); //console.log(response);
    if (response.status == true) {
      setMsgphone("Phone already exist");
      setphoneExist(true);
    } else {
      setMsgphone("");
      setphoneExist(false);
    }
  };
  const acceptOnlyNum = (phone) => {
    const value = phone.replace(/\D/g, "");
    setPhone(value);
  };
  const AddAdmin = async () => {
    setSubmitTrue(true);

    if (!name) {
      setnameError(true);
      setSubmitTrue(false);
      return;
    }
    setnameError(false);
    if (!email) {
      setEmailError(true);
      setSubmitTrue(false);
      return;
    }
    if (!validateEmail(email)) {
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
    if (!type) {
      setTypeError(true);
      setSubmitTrue(false);
      return;
    }
    setTypeError(false);
    if (password) {
      if (password.length < 6) {
        setMsgPassword("Password should contain six character long");
        setPasswordError(true);
        setSubmitTrue(false);
        return;
      }
    }
    setMsgPassword("");
    setPasswordError(false);

    if (emailExist) {
      setEmailError(true);
      setSubmitTrue(false);
      return;
    }
    setEmailError(false);
    if (phoneExist) {
      setPhoneError(true);
      setSubmitTrue(false);
      return;
    }
    setPhoneError(false);

    const obj = {
      name: name,
      email: email,
      phone: phone,
      type: type,
      password: password,
      id: slug.id,
    };

    let params = { url: apiList.updateAdmin, body: obj }; //console.log(params);
    let response = await ApiService.postData(params); //console.log(response);
    if (response.status) {
      setAlertSuccess((alertSuccess) => true);
      setTimeout(() => {
        setAlertSuccess((alertSuccess) => false);
      }, 3000); //document.getElementById("create-course-form").reset();

      setSubmitTrue((submitTrue) => false);
    } else {
      setAlertError((alertError) => true);
      setTimeout(() => {
        setAlertError((alertError) => false);
      }, 3000);
      setSubmitTrue((submitTrue) => false);
    }
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          {alertError && (
            <div
              className="alert position-absolute d-none w-100 alert-danger"
              role="alert"
            >
              Please try again!
            </div>
          )}

          {alertSuccess && (
            <div
              className="alert position-absolute w-100 alert-success"
              role="alert"
            >
              Admin updated successfully
            </div>
          )}

          <CCardHeader>
            <strong>Update Admin</strong>
          </CCardHeader>

          <CCardBody>
            <CForm id="create-project-form">
              <CContainer>
                <CRow className="align-items-start">
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel htmlFor="projectname">Name</CFormLabel>

                      <CFormInput
                        value={name}
                        type="text"
                        id="projectname"
                        placeholder="Name"
                        className={nameError ? "border-danger" : ""}
                        onChange={(e) => setName((name) => e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="email">Email</CFormLabel>

                      <CFormInput
                        onBlur={() => checkemail()}
                        value={email}
                        type="text"
                        className={emailError ? "border-danger" : ""}
                        id="email"
                        placeholder="Email"
                        onChange={(e) => setEmail((email) => e.target.value)}
                      />
                      <p className="text-danger">{msgemai}</p>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="phone">Phone</CFormLabel>

                      <CFormInput
                        onBlur={() => checkphone()}
                        value={phone}
                        type="text"
                        className={phoneError ? "border-danger" : ""}
                        id="phone"
                        placeholder="Phone"
                        onChange={(e) => acceptOnlyNum(e.target.value)}
                      />
                      <p className="text-danger">{msgphone}</p>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="type">Type</CFormLabel>
                      <select
                        value={type}
                        onChange={(e) => setType((type) => e.target.value)}
                        className={
                          typeError
                            ? "form-control border-danger bg-light text-dark"
                            : "form-control bg-light text-dark"
                        }
                      >
                        <option>Select</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Warehouse</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <CFormLabel htmlFor="password">Password</CFormLabel>

                      <CFormInput
                        value={password}
                        type="password"
                        className={passwordError ? "border-danger" : ""}
                        id="password"
                        placeholder="Password"
                        onChange={(e) =>
                          setPassword((password) => e.target.value)
                        }
                      />
                      <p className="text-danger">{msgPassword}</p>
                    </div>
                  </CCol>
                </CRow>

                <CButton
                  onClick={() => AddAdmin()}
                  color="primary"
                  disabled={submitTrue}
                >
                  Update
                </CButton>
              </CContainer>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
