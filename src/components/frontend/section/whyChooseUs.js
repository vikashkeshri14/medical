import React from "react";

export default function WhyChooseUs() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div class="ltn__feature-area section-bg-1 pt-115 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title-area text-center">
              <h1 className="section-title font-32">Why Choose Us</h1>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6 col-12">
            <ul className="ltn__list-item-1 ltn__list-item-1-before--- clearfix">
              <li className=" self-align-center">
                <img src="assets/img/others/why_choose_us_icon1-2.png" />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Prepare Your Medications List
                </span>
              </li>
              <li className="self-align-center">
                <img src="assets/img/others/why_choose_cs_icon2-2.png" />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Prepare Your Medications List
                </span>
              </li>
              <li className="self-align-center">
                <img src="assets/img/others/why_choose_us_icon3-2.png" />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Prepare Your Medications List
                </span>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-sm-6 col-12">
            <img
              src={publicUrl + "assets/img/others/why-choose-us-2.png"}
              alt="why choose us"
            />
          </div>
          <div class="col-lg-4 col-sm-6 col-12">
            <ul className="ltn__list-item-1 ltn__list-item-1-before--- clearfix">
              <li className=" self-align-center">
                <img src="assets/img/others/why_choose_us_icon1-2.png" />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Prepare Your Medications List
                </span>
              </li>
              <li className="self-align-center">
                <img src="assets/img/others/why_choose_cs_icon2-2.png" />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Prepare Your Medications List
                </span>
              </li>
              <li className="self-align-center">
                <img src="assets/img/others/why_choose_us_icon3-2.png" />
                <span className="font-weight-700 font-15 pl-10 text-black ">
                  Prepare Your Medications List
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
