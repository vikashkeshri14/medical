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
  const [nameAr, setNameAr] = useState("");
  const [nameError, setnameError] = useState(false);
  const [nameArError, setnameArError] = useState(false);
  const [governateError, setGovernateError] = useState(false);
  const [governate, setGovernate] = useState("");
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
    if (!nameAr) {
      setnameArError(true);
      setSubmitTrue(false);
      return;
    }
    setnameArError(false);
    if (!governate) {
      setGovernateError(true);
      setSubmitTrue(false);
      return;
    }
    setGovernateError(false);
    const obj = {
      name: name,
      governate: governate,
      name_ar: nameAr,
    };
    console.log(obj);
    //return;
    let params = { url: apiList.addCity, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);
    console.log(response);
    if (response.status) {
      setAlertSuccess((alertSuccess) => true);
      setTimeout(() => {
        setAlertSuccess((alertSuccess) => false);
      }, 3000); //document.getElementById("create-course-form").reset();
      setName("");
      setNameAr("");
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
              City added successfully
            </div>
          )}

          <CCardHeader>
            <strong>Add New City</strong>
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
                      <CFormLabel htmlFor="namear">Name Arabic</CFormLabel>

                      <CFormInput
                        value={nameAr}
                        type="text"
                        className={nameArError ? "border-danger" : ""}
                        id="namear"
                        placeholder=" Name Arabic"
                        onChange={(e) => setNameAr((nameAr) => e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <CFormLabel htmlFor="namear">Governate</CFormLabel>
                      <select
                        value={governate}
                        onChange={(e) =>
                          setGovernate((governate) => e.target.value)
                        }
                        className={
                          governateError
                            ? "form-control border-danger"
                            : "form-control"
                        }
                      >
                        <option value="">Select</option>
                        <option value="Makkah">Makkah</option>
                        <option value="Al Madinah">Al Madinah</option>
                        <option value="Riyadh">Riyadh</option>
                        <option value="Al Qassim">Al Qassim</option>
                        <option value="Eastern Province">
                          Eastern Province
                        </option>
                        <option value="Asir">Asir</option>
                        <option value="Tabuk">Tabuk</option>
                        <option value="Ha'il">Ha'il</option>
                        <option value="Northern Borders">
                          Northern Borders
                        </option>
                        <option value="Jizan">Jizan</option>
                        <option value="Najran">Najran</option>
                        <option value="Al Baha">Al Baha</option>
                        <option value="Al Jawf">Al Jawf</option>
                      </select>
                    </div>
                  </CCol>
                </CRow>

                <CButton
                  onClick={() => insertProject()}
                  color="primary"
                  disabled={submitTrue}
                >
                  Add City
                </CButton>
              </CContainer>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
