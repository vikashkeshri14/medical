import React from "react";
import config from "../../../config/config.json";
export default function TermContent() {
  return (
    <div className="ltn__page-details-area ltn__service-details-area mt-10 mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__page-details-inner ltn__service-details-inner">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Terms And Conditions
              </h6>
              <p>
                <span className="ltn__first-letter">M</span>edmart is committed
                to protecting the privacy and security of your personal
                information. This Privacy Policy describes how we collect, use,
                and disclose information when you use our B2B solution for
                pharmacies and medical centers in KSA.
              </p>
              <p>
                By accessing or using the service, you agree to the terms and
                conditions of this Privacy Policy. If you do not agree with any
                part of this policy, please do not use the service.
              </p>

              <p>
                1. Information We Collect We may collect the following types of
                information when you use Medmart: Personal Information: - Name -
                Email address - Phone number - Pharmacy or medical center name
                and address - Pharmacy type (individual/chain)
              </p>
              <p>
                2. How We Use Your Information We may use the information we
                collect for the following purposes: - To provide and maintain
                the service - To process and fulfill your orders - To
                communicate with you and respond to your inquiries - To
                personalize your experience with the service - To monitor and
                analyze usage of the service - To improve our products and
                services - To detect, prevent, and address technical issues or
                fraud - To comply with legal obligations
              </p>
              <p>
                3. Data Sharing and Disclosure We don’t share your information
                with third parties (suppliers and vendors).
              </p>
              <p>
                4. Data Retention and Deletion We retain your personal
                information for as long as necessary to fulfill the purposes
                outlined.
              </p>
              <p>
                5. Security We implement reasonable security measures to protect
                your personal information from unauthorized access, alteration,
                disclosure, or destruction.
              </p>
              <p>
                If you have any questions about this Privacy Policy, practices,
                or dealings within the platform, please contact us at{" "}
                <span className="ltn__secondary-color">
                  Help@medmart.health
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
