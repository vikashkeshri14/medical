import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../../../components/backend/index";
import { CContainer } from "@coreui/react";
import List from "../../../components/backend/supplier/List";

export default function Supplier() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <CContainer className="px-0">
          <div className="body flex-grow-1">
            <List />
          </div>
        </CContainer>
        <AppFooter />
      </div>
    </div>
  );
}
