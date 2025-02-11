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
    name: "Projects",
    to: "/admin",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Project List",
        to: "/project",
      },
      {
        component: CNavItem,
        name: "Add Project",
        to: "/project/add-project",
      },
      {
        component: CNavItem,
        name: "Manage Villas",
        to: "/project/villa",
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
