import React, { useEffect, useState } from "react";
import {
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../../../components/backend/index";
import { CContainer } from "@coreui/react";
import Add from "../../../components/backend/city/Add";

export default function AddCity() {
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
