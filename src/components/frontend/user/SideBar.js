import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogoutInfo } from "../../../features/user/user";

export default function SideBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let loginInfo = localStorage.getItem("loginInfo");
    if (!loginInfo || loginInfo == "undefined") {
      localStorage.clear();
      return navigate("/login");
    }
  });
  const dispatch = useDispatch();
  const logoutUser = async () => {
    dispatch(LogoutInfo());
    navigate("/login");
  };
  return (
    <div className="ltn__tab-menu-list mb-50">
      <div className="nav">
        <Link
          to="/account"
          className={pathname == "/account" ? "active show" : ""}
        >
          Dashboard <i className="fas fa-home" />
        </Link>
        <Link
          to="/profile"
          className={pathname == "/profile" ? "active show" : ""}
        >
          Profiles <i className="fas fa-user" />
        </Link>
        <Link
          to="/address"
          className={pathname == "/address" ? "active show" : ""}
        >
          Address <i className="fas fa-map-marker-alt" />
        </Link>

        <Link
          to="/orders"
          className={pathname == "/orders" ? "active show" : ""}
        >
          Orders <i className="fa-solid fa-cart-plus" />
        </Link>

        <Link
          to="/track-orders"
          className={pathname == "/track-orders" ? "active show" : ""}
        >
          Track Order <i className="fa-solid fa-truck-fast" />
        </Link>

        <Link
          to="/change-password"
          className={pathname == "/change-password" ? "active show" : ""}
        >
          Change Password <i className="fa-solid fa-lock" />
        </Link>
        <Link onClick={() => logoutUser()}>
          Logout <i className="fas fa-sign-out-alt" />
        </Link>
      </div>
    </div>
  );
}
