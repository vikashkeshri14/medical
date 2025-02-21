import React from "react";
import config from "../../../config/config.json";
import { Link } from "react-router-dom";
export default function AboutContent() {
  return (
    <div className="ltn__about-us-area pt-60 pb-90 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img
                src={config.domainUrl + "/assets/img/others/home1.png"}
                alt="About Us Image"
              />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-20">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  About Us
                </h6>

                <p>
                  MedMart is a digital marketplace connecting pharmacies and
                  medical centers with medical suppliers, providing easy,
                  convenient, and quick access to medicines, supplies, and
                  cosmetics at competitive prices.
                </p>
                <p>
                  The platform allows suppliers to showcase their offerings,
                  enabling buyers to compare products and prices for optimal
                  purchasing decisions. Through partnerships with licensed
                  financial institutions, MedMart offers a unique “Buy Now, Pay
                  Later” financing option to support sustainable revenue growth
                  for pharmacists.
                </p>
                <p>
                  MedMart is expanding into new verticals to enhance business
                  support and create a highly efficient nationwide
                  pharmaceutical supply chain.
                </p>
              </div>
              <ul className="ltn__list-item-half clearfix">
                <li>
                  <i className="flaticon-home-2" />
                  Lowest Price Guarantee
                </li>
                <li>
                  <i className="flaticon-mountain" />
                  100% Secure Transactions
                </li>
                <li>
                  <i className="flaticon-heart" />
                  Exceptional Customer Service
                </li>
                <li>
                  <i className="flaticon-secure" />
                  Multiple payment options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
