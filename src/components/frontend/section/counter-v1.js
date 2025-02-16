import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class CounterV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__counterup-area section-bg-1 pt-120 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-select" />
                </div>
                <h1>
                  <span className="counter">7500</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Type of Medicine</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-office" />
                </div>
                <h1>
                  <span className="counter">25</span>

                  <span className="counterUp-icon">+</span>
                </h1>
                <h6>Distributor</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-excavator" />
                </div>
                <h1>
                  <span className="counter">1,758</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Trust Customers</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-armchair" />
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
    );
  }
}

export default CounterV1;
