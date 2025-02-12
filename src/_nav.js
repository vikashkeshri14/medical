import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/admin",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    component: CNavTitle,
    name: "Components",
  },
  {
    component: CNavGroup,
    name: "Admin",
    to: "/admin",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Admin List",
        to: "/admin/admin-list",
      },
      {
        component: CNavItem,
        name: "Add Admin",
        to: "/admin/add-admin",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Brands",
    to: "/admin/brand",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Brand List",
        to: "/admin/brand",
      },
      {
        component: CNavItem,
        name: "Add Brand",
        to: "/admin/add-brand",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Categories",
    to: "/admin/categories",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Category List",
        to: "/admin/categories",
      },
      {
        component: CNavItem,
        name: "Add Category",
        to: "/admin/add-category",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Drugs",
    to: "/admin/drugs",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Drugs List",
        to: "/admin/drugs",
      },
      {
        component: CNavItem,
        name: "Add Drugs",
        to: "/admin/add-drugs",
      },
      {
        component: CNavItem,
        name: "Import Drugs",
        to: "/admin/import-drugs",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Blog",
    to: "/admin",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Blog List",
        to: "/blog",
      },
      {
        component: CNavItem,
        name: "Add Blog",
        to: "/blog/add-blog",
      },
      {
        component: CNavItem,
        name: "Manage Categories",
        to: "/blog/categories",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Manage User",
    to: "/user",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "User List",
        to: "/user",
      },
    ],
  },
];

export default _nav;
