import React from "react";
import config from "../../../config/config.json";
export default function WhyChooseUs() {
  return (
    <div className="ltn__feature-area section-bg-1 pt-115 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title font-32">Why Choose Us</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 col-12">
            <ul className="ltn__list-item-1 d-flex flex-column ltn__list-item-1-before--- clearfix">
              <li className="self-align-center choose">
                <img
                  src={
                    config.domainUrl +
                    "/assets/img/others/why_choose_us_icon1-2.png"
                  }
                />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Lowest Price Guarantee
                </span>
              </li>
              <li className="self-align-center choose">
                <img
                  src={
                    config.domainUrl +
                    "/assets/img/others/why_choose_cs_icon2-2.png"
                  }
                />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  100% Secure Transactions
                </span>
              </li>
              <li className="self-align-center choose">
                <img
                  src={
                    config.domainUrl +
                    "/assets/img/others/why_choose_us_icon3-2.png"
                  }
                />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Regular sales and gift cards
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <img
              src={config.domainUrl + "/assets/img/others/why-choose-us-2.png"}
              alt="why choose us"
            />
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <ul className="ltn__list-item-1 d-flex flex-column ltn__list-item-1-before--- clearfix">
              <li className="self-align-center choose">
                <img
                  src={
                    config.domainUrl +
                    "/assets/img/others/why_choose_us_icon6-2.png"
                  }
                />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Exceptional Customer Service
                </span>
              </li>
              <li className="self-align-center choose">
                <img
                  src={
                    config.domainUrl +
                    "/assets/img/others/why_choose_us_icon1-2.png"
                  }
                />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Multiple payment options
                </span>
              </li>
              <li className="self-align-center choose">
                <img
                  src={
                    config.domainUrl +
                    "/assets/img/others/why_choose_us_icon5-2.png"
                  }
                />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Superior Shopping Experience
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
