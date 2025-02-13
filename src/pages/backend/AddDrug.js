import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../../components/backend/index";
import { CContainer } from "@coreui/react";
import Add from "../../components/backend/drug/Add";

export default function AddDrug() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <CContainer className="px-4">
          <div className="body flex-grow-1">
            <Add />
          </div>
        </CContainer>
        <AppFooter />
      </div>
    </div>
  );
}
