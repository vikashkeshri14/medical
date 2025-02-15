import React from "react";
import config from "../../../config/config.json";

export default function ListOrder() {
  return (
    <div className="ltn__about-us-area pt-25 pb-120 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h1 className="section-title font-32">
                  List, Compare and Order
                </h1>
              </div>
              <ul className="ltn__list-item-1 ltn__list-item-1-before--- clearfix">
                <li className="d-flex flex-row self-align-center">
                  <img
                    src={config.domainUrl + "/assets/img/others/prepare.svg"}
                  />
                  <div className="pl-10">
                    <h6 className="font-weight-600 font-15">
                      Prepare Your Medications List
                    </h6>
                    <span className="font-14">
                      Start your day right with the quick and easy experience of
                      adding your product list needs to our platform; this will
                      help you to find and match the best offers.
                    </span>
                  </div>
                </li>
                <li className="d-flex flex-row self-align-center">
                  <img src={config.domainUrl + "/assets/img/others/find.svg"} />
                  <div className="pl-10">
                    <h6 className="font-weight-600 font-15">
                      Find and Compare Different Offers
                    </h6>
                    <span className="font-14">
                      Once your list is full, use our intelligent Checkout Cart
                      to check the best offers from many suppliers.
                    </span>
                  </div>
                </li>
                <li className="d-flex flex-row self-align-center">
                  <img
                    src={config.domainUrl + "/assets/img/others/get-order.svg"}
                  />
                  <div className="pl-10">
                    <h6 className="font-weight-600 font-15">
                      Get Your Order Delivered Within 24 hours
                    </h6>
                    <span className="font-14">
                      We strive to fulfill your order as fast as possible, with
                      the guarantee of free delivery and the opportunity of same
                      day delivery (when order is placed before 4 PM).
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img
                src={config.domainUrl + "/assets/img/others/home1.png"}
                alt="About Us Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
