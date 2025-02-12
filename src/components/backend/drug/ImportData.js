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
import * as XLSX from "xlsx";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import { useNavigate } from "react-router-dom";

export default function ImportData() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [resetkey, setResetKey] = useState(0);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);

      setData(sheetData);
    };

    reader.readAsBinaryString(file);
  };
  const UploadList = async () => {
    setDisableButton(true);
    if (!data.length) {
      setError(true);
      setDisableButton(false);
      return;
    }
    const obj = {
      data: data,
    };
    let params = { url: apiList.importDrugs, body: obj }; //console.log(params);
    let response = await ApiService.postData(params); //console.log
    if (response.status) {
      setAlertSuccess((alertSuccess) => true);
      setTimeout(() => {
        setAlertSuccess((alertSuccess) => false);
        return navigate("/admin/import-drugs");
      }, 5000); //document.getElementById("create-course-form").reset();
      setDisableButton((disableButton) => false);
      setResetKey(1);
    } else {
      setAlertError((alertError) => true);
      setTimeout(() => {
        setAlertError((alertError) => false);
        setResetKey(1);
        return navigate("/admin/import-drugs");
      }, 5000);
      setDisableButton((disableButton) => false);
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
            <strong>Import Drugs</strong>
          </CCardHeader>

          <CCardBody>
            <CForm id="create-project-form">
              <CContainer>
                <CRow className="align-items-start">
                  <CCol>
                    <div className="mb-3">
                      <CFormInput
                        className={error ? "border-danger" : ""}
                        type="file"
                        id="formFileMultiple"
                        key={resetkey}
                        label="Import Drugs"
                        onChange={handleFileUpload}
                      />
                    </div>
                  </CCol>
                </CRow>

                <CButton
                  onClick={() => UploadList()}
                  color="primary"
                  disabled={disableButton}
                >
                  Import
                </CButton>
              </CContainer>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
