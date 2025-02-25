import React, { useEffect, useState } from "react";
import {
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../../../components/backend/index";
import { CContainer } from "@coreui/react";
import CategoryList from "../../../components/backend/category/CategoryList";

export default function Category() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <CContainer className="px-4">
          <div className="body flex-grow-1">
            <CategoryList />
          </div>
        </CContainer>
        <AppFooter />
      </div>
    </div>
  );
}
