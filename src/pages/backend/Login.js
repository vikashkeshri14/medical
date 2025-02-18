import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser, cilEnvelopeClosed } from "@coreui/icons";
import "../../scss/style.scss";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import { useNavigate } from "react-router-dom";
// We use those styles to show code examples, you should remove them in your application.
import "../../scss/examples.scss";
const Login = () => {
  let navigate = useNavigate();
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState("");

  const LoginToUser = async () => {
    if (!email) {
      setErrorEmail("Please enter the email id");
    }
    setErrorEmail("");
    if (!password) {
      setErrorPassword("Please enter the password");
    }
    const obj = {
      email: email,
      password: password,
    };

    let params = { url: apiList.login, body: obj };
    //console.log(params);
    let response = await ApiService.postData(params);
    console.log(response);
    if (response.status) {
      //console.log(response.results);
      //return;
      localStorage.setItem("userinfor", JSON.stringify(response.results));
      return navigate("/admin");
    } else {
      setLoginFailed(response.message);
    }
  };
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-2">
                      <CInputGroupText>
                        <CIcon icon={cilEnvelopeClosed} />
                      </CInputGroupText>
                      <CFormInput
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Id"
                        autoComplete="email id"
                      />
                    </CInputGroup>
                    <div className="text-danger">{errorEmail}</div>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <div className="text-danger">{errorPassword}</div>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          onClick={() => LoginToUser()}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                    <div className="text-danger">{loginFailed}</div>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <p className="mt-5">
                      <Link to="/">
                        <img
                          src={publicUrl + "assets/img/medmart.png"}
                          alt="Logo"
                        />
                      </Link>
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
