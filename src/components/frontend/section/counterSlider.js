import React from "react";

export default function CounterSlider() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="p-2">
      <div className="ltn__counterup-area section-bg ml-10 mr-10  border-radius-200 ">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 slider-counter  align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <img src="/medmart/assets/img/icon-counter1-2.png" />
                </div>
                <h1>
                  <span className="counter">7500</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Type of Medicine</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 slider-counter  align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <img src="/medmart/assets/img/icon-counter2-2.png" />
                </div>
                <h1>
                  <span className="counter">25</span>
                  <span className="counterUp-icon">+</span>
                </h1>
                <h6>Distributor</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 slider-counter  align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <img src="/medmart/assets/img/icon-counter3-2.png" />
                </div>
                <h1>
                  <span className="counter">1,758</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Trust Customers</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 slider-counter align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <img src="/medmart/assets/img/icon-counter4-2.png" />
                </div>
                <h1>
                  <span className="counter">200</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Pharmacy Stores</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
