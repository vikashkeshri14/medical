import React from "react";
import config from "../../../config/config.json";
export default function ContactInfo() {
  return (
    <div className="ltn__contact-address-area pt-50 mb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img
                  src={config.domainUrl + "/assets/img/icons/10.png"}
                  alt="Icon Image"
                />
              </div>
              <h3>Email Address</h3>
              <p>
                help@medmart.health <br />
                &nbsp;
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img
                  src={config.domainUrl + "/assets/img/icons/11.png"}
                  alt="Icon Image"
                />
              </div>
              <h3>Phone Number</h3>
              <p>
                +920000958 <br />
                &nbsp;
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img
                  src={config.domainUrl + "/assets/img/icons/12.png"}
                  alt="Icon Image"
                />
              </div>
              <h3>Office Address</h3>
              <p>Prince Muqrin Ibn Abdulaziz St, An Nuzhah, Riyadh 12474</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
