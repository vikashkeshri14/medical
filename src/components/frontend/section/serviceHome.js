import React from "react";
import config from "../../../config/config.json";
export default function ServiceHome() {
  return (
    <div className="ltn__feature-area section-bg-1 mt-10 pt-30 pb-30 mt--65---">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="section-title text-center font-32 line-height-normal">
              <span className="secondary ">One-stop</span> digital marketplace{" "}
              <br />
              for all pharmacy and medical center needs.
            </h1>
            <div className="row section-bg-1">
              <div className="ltn__feature-item col-md-4 pl-5 pr-5 ltn__feature-item-8">
                <img
                  src={
                    config.domainUrl +
                    "/assets/img/home/icon-SuppliesHiFi-63c3c41f.svg"
                  }
                  alt="#"
                />
                <div className="ltn__feature-info pl-5">
                  <h4 className="font-17 font-weight-600">
                    Never Let Shortages Control Your Day
                  </h4>
                  <p className="font-14 font-weight-400 line-height-normal ">
                    Medmart will help you to plan ahead and organize your
                    pharmacy’s or clinic’s needs. You have the option to search
                    through many suppliers to secure the products you need.
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item  pl-5 pr-5 col-md-4 ltn__feature-item-8">
                <img
                  src={
                    config.domainUrl +
                    "/assets/img/home/icon-Offer-410f4300.svg"
                  }
                  alt="#"
                />

                <div className="ltn__feature-info pl-5">
                  <h4 className="font-17 font-weight-600">
                    Exclusive Unmatched Offers
                  </h4>
                  <p className="font-14 font-weight-400 line-height-normal">
                    As a Medmart member you get exclusive offers from suppliers.
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item pl-5 pr-5 col-md-4 ltn__feature-item-8">
                <img
                  src={
                    config.domainUrl +
                    "/assets/img/home/icon-ListHiFi-fdf8594e.svg"
                  }
                  alt="#"
                />

                <div className="ltn__feature-info pl-5">
                  <h4 className="font-17 font-weight-600">
                    Plan now, Order later
                  </h4>
                  <p className="font-14 font-weight-400 line-height-normal">
                    We are your daily companion. Add all of the supplies that
                    you need to your Favorites List, and search for them at any
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
