import React from "react";
import config from "../../../config/config.json";
export default function PlatformMedicine() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div class="ltn__feature-area section-bg-1 mt-10 pt-20 pb-30 mt--65---">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="section-title text-center font-32 line-height-normal">
              The preferred platform for your pharmacy's <br />
              or clinic's orders in{" "}
              <span className="secondary ">Saudi Arabia</span>
            </h1>
            <div class="row section-bg-1 mt-5">
              <div className="col">
                <div class="col-12">
                  <div class="ltn__category-item  border-0 cursor-pointer ltn__category-item-6 text-center">
                    <div class="ltn__category-item-img">
                      <a href="#">
                        <img
                          style={{ width: "100px" }}
                          src={publicUrl + "assets/img/others/featured_1.svg"}
                        />
                      </a>
                    </div>
                    <div class="ltn__category-item-name">
                      <h6 className="ltn__secondary-color">
                        Get Your Pharmacy’s Or Clinic’s Needs At Optimum Prices
                      </h6>
                      <p>
                        Get the highest discounts, find medications that are in
                        shortage and view offers from different warehouses with
                        convenience; all in one place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="col-12">
                  <div class="ltn__category-item  border-0 cursor-pointer ltn__category-item-6 text-center">
                    <div class="ltn__category-item-img">
                      <a href="#">
                        <img
                          style={{ width: "100px" }}
                          src={publicUrl + "assets/img/others/featured_2.svg"}
                        />
                      </a>
                    </div>
                    <div class="ltn__category-item-name">
                      <h6 className="ltn__secondary-color">
                        Faster and More Convenient Ordering Process
                      </h6>
                      <p>
                        Enjoy same day delivery from different warehouses on
                        orders placed by 4PM or have your items delivered within
                        24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="col-12">
                  <div class="ltn__category-item border-0 ltn__category-item-6 cursor-pointer text-center">
                    <div class="ltn__category-item-img">
                      <a href="#">
                        <img
                          style={{ width: "100px" }}
                          src={publicUrl + "assets/img/others/featured_1.svg"}
                        />
                      </a>
                    </div>
                    <div class="ltn__category-item-name">
                      <h6 className="ltn__secondary-color">
                        We Are Your Daily Companion
                      </h6>
                      <p>
                        We strive to help you grow everyday. To save you time
                        and money, all of Medmart’s services are free. No
                        registration or delivery fees are required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
