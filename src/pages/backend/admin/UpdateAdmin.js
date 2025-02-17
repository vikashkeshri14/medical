import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../../../components/backend/index";
import { CContainer } from "@coreui/react";
import Update from "../../../components/backend/admin/Update";

export default function UpdateAdmin() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <CContainer className="px-4">
          <div className="body flex-grow-1">
            <Update />
          </div>
        </CContainer>
        <AppFooter />
      </div>
    </div>
  );
}
