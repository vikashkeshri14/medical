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
  const [discount, setDiscount] = useState("");
  const [discountError, setdiscountError] = useState(false);
  const [type, setType] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [nameError, setnameError] = useState(false);
  const [minimumError, setMinimumError] = useState(false);
  const [minimum, setMinimum] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [submitTrue, setSubmitTrue] = useState(false);

  const insertTier = async () => {
    setSubmitTrue(true);
    if (!name) {
      setnameError(true);
      setSubmitTrue(false);
      return;
    }
    setnameError(false);
    if (!discount) {
      setdiscountError(true);
      setSubmitTrue(false);
      return;
    }
    setdiscountError(false);
    if (!minimum) {
      setMinimumError(true);
      setSubmitTrue(false);
      return;
    }
    setMinimumError(false);
    if (!type) {
      setTypeError(true);
      setSubmitTrue(false);
      return;
    }
    setTypeError(false);
    const obj = {
      name: name,
      discount: discount,
      minimum_val: minimum,
      type: type,
    };
    //console.log(obj);
    //return;
    let params = { url: apiList.addTier, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);
    //console.log(response);
    if (response.status) {
      setAlertSuccess((alertSuccess) => true);
      setTimeout(() => {
        setAlertSuccess((alertSuccess) => false);
      }, 3000); //document.getElementById("create-course-form").reset();
      setName("");
      setType("");
      setDiscount("");
      setMinimum("");

      setSubmitTrue((submitTrue) => false);
    } else {
      setAlertError((alertError) => true);
      setTimeout(() => {
        setAlertError((alertError) => false);
      }, 3000);
      setSubmitTrue((submitTrue) => false);
    }
  };
  const acceptOnlyNum = (args) => {
    const value = args.replace(/\D/g, "");
    setDiscount(value);
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
              City added successfully
            </div>
          )}

          <CCardHeader>
            <strong>Add New Tier</strong>
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
                      <CFormLabel htmlFor="namear">Discount</CFormLabel>

                      <CFormInput
                        value={discount}
                        type="text"
                        className={discountError ? "border-danger" : ""}
                        id="namear"
                        placeholder="Discount"
                        onChange={(e) => acceptOnlyNum(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="namear">Minimum Value</CFormLabel>

                      <CFormInput
                        value={minimum}
                        type="text"
                        className={minimumError ? "border-danger" : ""}
                        id="namear"
                        placeholder="Minimum value"
                        onChange={(e) =>
                          setMinimum((minimum) =>
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <CFormLabel htmlFor="namear">Type</CFormLabel>
                      <select
                        value={type}
                        onChange={(e) => setType((type) => e.target.value)}
                        className={
                          typeError
                            ? "form-control border-danger"
                            : "form-control"
                        }
                      >
                        <option value="">Select</option>
                        <option value="custom">custom</option>
                        <option value="city">city</option>
                        <option value="gov">gov</option>
                        <option value="default">default</option>
                        <option value="warehouse">warehouse</option>
                      </select>
                    </div>
                  </CCol>
                </CRow>

                <CButton
                  onClick={() => insertTier()}
                  color="primary"
                  disabled={submitTrue}
                >
                  Add Tier
                </CButton>
              </CContainer>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
