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
export default function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [nameError, setnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [submitTrue, setSubmitTrue] = useState(false);

  const insertProject = async () => {
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
    setEmailError(false);
    if (!phone) {
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
    };
    //console.log(obj);
    //return;
    let params = { url: apiList.addBrand, body: obj }; //console.log(params);
    let response = await ApiService.postData(params); //console.log(response);
    if (response.status) {
      setAlertSuccess((alertSuccess) => true);
      setTimeout(() => {
        setAlertSuccess((alertSuccess) => false);
      }, 3000); //document.getElementById("create-course-form").reset();
      setName("");
      setEmail("");
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
              Brand added successfully
            </div>
          )}

          <CCardHeader>
            <strong>Add Admin</strong>
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
                        value={email}
                        type="text"
                        className={email ? "border-danger" : ""}
                        id="email"
                        placeholder="Email"
                        onChange={(e) => setEmail((email) => e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="phone">Phone</CFormLabel>

                      <CFormInput
                        value={phone}
                        type="text"
                        className={phone ? "border-danger" : ""}
                        id="phone"
                        placeholder="Phone"
                        onChange={(e) => setPhone((phone) => e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="type">Type</CFormLabel>
                    </div>
                  </CCol>
                </CRow>

                <CButton
                  onClick={() => insertProject()}
                  color="primary"
                  disabled={submitTrue}
                >
                  Submit
                </CButton>
              </CContainer>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
