import React from "react";
import config from "../../../config/config.json";
import { Link } from "react-router-dom";

export default function Complete() {
  return (
    <div className="ltn__checkout-area mt-50 mb-105">
      <div className="container">
        <div className="row">
          <div class="d-flex align-items-center justify-content-center">
            <div className="text-center">
              <img
                style={{ width: "100px" }}
                src={"/medmart/assets/img/accept.png"}
              />
              <div className="section-title-area mt-2 ltn__section-title-2 text-center">
                <h3 className="text-center font-weight-600 animated fadeIn">
                  Your order is completed!
                </h3>
                <p className="text-center mt-0">
                  Thank you for your order! Your order is being processed and
                  will be completed within 3-6 hours. You will receive an email
                  confirmation when your order is completed.
                </p>
                <Link
                  className="btn btn-primary mt-4 btn-pill transition-3d-hover px-5"
                  to="/drugs"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
