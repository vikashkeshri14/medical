import React, { useEffect, useState } from "react";
import {
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../../../components/backend/index";
import { CContainer } from "@coreui/react";
import CityList from "../../../components/backend/city/CityList";

export default function City() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <CContainer className="px-4">
          <div className="body flex-grow-1">
            <CityList />
          </div>
        </CContainer>
        <AppFooter />
      </div>
    </div>
  );
}
