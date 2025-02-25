import React from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../config/config.json";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { LogoutInfo } from "../../../features/user/user";
export default function Details() {
  const userinfo = useSelector((state) => state.user.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Logout = async () => {
    dispatch(LogoutInfo());
    navigate("/login");
  };
  //console.log(userinfo);
  return (
    <div className="liton__wishlist-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* PRODUCT TAB AREA START */}
            <div className="ltn__product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <SideBar />
                  </div>
                  <div className="col-lg-8">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="ltn_tab_1_1"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <h3>Dashboard</h3>
                          <p>
                            Hello <strong>{userinfo.pharmacy_name}</strong> (not{" "}
                            <strong>{userinfo.pharmacy_name}</strong>?{" "}
                            <small>
                              <Link onClick={() => Logout()}>Log out</Link>
                            </small>{" "}
                            )
                          </p>
                          <p>
                            From your account dashboard you can view your{" "}
                            <span>Recent Orders</span>, <span>Track Order</span>
                            , <span>Shipping and Billing addresses</span>, and{" "}
                            <span>Edit your password and account details</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PRODUCT TAB AREA END */}
          </div>
        </div>
      </div>
    </div>
  );
}
