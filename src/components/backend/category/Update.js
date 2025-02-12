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
import config from "../../../config/config.json";
import { useParams } from "react-router-dom";
export default function Update() {
  const slug = useParams();
  const [name, setName] = useState("");
  const [nameAr, setNameAr] = useState("");
  const [nameError, setnameError] = useState(false);
  const [nameArError, setnameArError] = useState(false);
  const [imagesError, setImagesError] = useState(false);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [submitTrue, setSubmitTrue] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const obj = {
        id: slug.id,
      };
      let params = { url: apiList.getCategoryById, body: obj }; //console.log(params);
      let response = await ApiService.postData(params);
      if (response) {
        setName(response.results[0].name);
        setNameAr(response.results[0].name_ar);
        setImage(response.results[0].images);
      }
    };
    fetchData();
  }, []);
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = ""; // Make new FileReader
      let reader = new FileReader(); // Convert the file to base64 text
      reader.readAsDataURL(file); // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const getFileData = (e, identifier) => {
    const files = e.target.files;
    let img = [];
    for (let i = 0; i < files.length; i++) {
      getBase64(files[i])
        .then((result) => {
          let base64img = result.split(","); //console.log(base64img);
          img.push(base64img[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (identifier == "img") {
      setImages((images) => img);
    }
  };

  const updateCategory = async () => {
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
    const obj = {
      name: name,
      images: images,
      name_ar: nameAr,
      id: slug.id,
    };
    //console.log(obj);
    //return;
    let params = { url: apiList.updateCategory, body: obj };
    console.log(params);
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
              Brand updated successfully
            </div>
          )}

          <CCardHeader>
            <strong>Update Brand</strong>
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
                      <CFormInput
                        className={imagesError ? "border-danger" : ""}
                        type="file"
                        id="formFileMultiple"
                        label="Brand Image"
                        onChange={(e) => getFileData(e, "img")}
                      />
                    </div>
                    {image && (
                      <img
                        style={{ height: "50px" }}
                        src={config.apiUrl + "/" + image}
                      />
                    )}
                  </CCol>
                </CRow>

                <CButton
                  onClick={() => updateCategory()}
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
