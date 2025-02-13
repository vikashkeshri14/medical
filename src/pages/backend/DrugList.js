import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../../components/backend/index";
import { CContainer } from "@coreui/react";
import BrandList from "../../components/backend/brand/BrandList";
import Drugs from "../../components/backend/drug/Drugs";

export default function DrugList() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <CContainer className="px-0">
          <div className="body flex-grow-1">
            <Drugs />
          </div>
        </CContainer>
        <AppFooter />
      </div>
    </div>
  );
}
