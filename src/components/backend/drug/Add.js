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
  const [imagesError, setImagesError] = useState(false);
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [descriptionAr, setDescriptionAr] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [priceError, setPriceError] = useState(false);
  const [stockError, setStockError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [submitTrue, setSubmitTrue] = useState(false);

  useEffect(() => {
    const fetchCat = async () => {
      let params = { url: apiList.getCategory }; //console.log(params);
      let response = await ApiService.getData(params);
      //console.log(response);
      setCategories(response.results);
    };
    fetchCat();
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

  const insertDrug = async () => {
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
    if (price == "") {
      setPriceError(true);
      setSubmitTrue(false);
      return;
    }
    setPriceError(false);
    if (stock == "") {
      setStockError(true);
      setSubmitTrue(false);
      return;
    }
    setStockError(false);
    if (!images) {
      setImagesError(true);
      setSubmitTrue(false);
      return;
    }
    setImagesError(false);
    if (!category) {
      setCategoryError(true);
      setSubmitTrue(false);
      return;
    }
    setCategoryError(false);

    const obj = {
      name: name,
      images: images,
      name_ar: nameAr,
      description: description,
      description_ar: descriptionAr,
      price: price,
      stock: stock,
      category: category,
    };
    //console.log(obj);
    //return;
    let params = { url: apiList.addDrug, body: obj }; //console.log(params);
    let response = await ApiService.postData(params); //console.log(response);
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
              Drug added successfully
            </div>
          )}

          <CCardHeader>
            <strong>Add Drug</strong>
          </CCardHeader>

          <CCardBody>
            <CForm id="create-project-form">
              <CContainer>
                <CRow className="align-items-start">
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel htmlFor="name">Name</CFormLabel>

                      <CFormInput
                        value={name}
                        type="text"
                        id="name"
                        placeholder="Name"
                        className={nameError ? "border-danger" : ""}
                        onChange={(e) => setName((name) => e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="description">Description</CFormLabel>

                      <CFormTextarea
                        value={description}
                        type="text"
                        id="description"
                        placeholder="Name"
                        className={nameError ? "border-danger" : ""}
                        onChange={(e) =>
                          setDescription((description) => e.target.value)
                        }
                      ></CFormTextarea>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="stock">Stock</CFormLabel>

                      <CFormInput
                        value={stock}
                        type="text"
                        id="stock"
                        placeholder="Stock"
                        className={stockError ? "border-danger" : ""}
                        onChange={(e) =>
                          setStock((stock) => e.target.value.replace(/\D/g, ""))
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <CFormInput
                        className={imagesError ? "border-danger" : ""}
                        type="file"
                        id="formFileMultiple"
                        label="Drug Image"
                        onChange={(e) => getFileData(e, "img")}
                      />
                    </div>
                  </CCol>
                  <CCol>
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
                      <CFormLabel htmlFor="description_ar">
                        Description Arabic
                      </CFormLabel>

                      <CFormTextarea
                        value={descriptionAr}
                        type="text"
                        id="description_ar"
                        placeholder="Description Arabic"
                        onChange={(e) =>
                          setDescriptionAr((descriptionAr) => e.target.value)
                        }
                      ></CFormTextarea>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="price">Price</CFormLabel>

                      <CFormInput
                        value={price}
                        type="text"
                        id="price"
                        placeholder="Price"
                        className={priceError ? "border-danger" : ""}
                        onChange={(e) =>
                          setPrice((price) =>
                            e.target.value.replace(/[^\.0-9]/g, "")
                          )
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="price">Category</CFormLabel>

                      <select
                        value={category}
                        className={
                          categoryError
                            ? " border-danger form-select"
                            : "form-select"
                        }
                        aria-label="Default select example"
                        onChange={(e) =>
                          setCategory((category) => e.target.value)
                        }
                      >
                        <option>Select</option>
                        {categories.length &&
                          categories.map((items, i) => {
                            return (
                              <option
                                key={i}
                                value={items.slug}
                              >
                                {items.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </CCol>
                </CRow>

                <CButton
                  onClick={() => insertDrug()}
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
