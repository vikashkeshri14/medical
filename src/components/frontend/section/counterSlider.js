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
                  <i className="flaticon-select" />
                </div>
                <h1>
                  <span className="counter">560</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Total Area Sq</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 slider-counter  align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-office" />
                </div>
                <h1>
                  <span className="counter">197</span>
                  <span className="counterUp-letter">K</span>
                  <span className="counterUp-icon">+</span>
                </h1>
                <h6>Apartments Sold</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 slider-counter  align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-excavator" />
                </div>
                <h1>
                  <span className="counter">268</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Total Constructions</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 slider-counter align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-armchair" />
                </div>
                <h1>
                  <span className="counter">340</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Apartio Rooms</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
