import React from "react";

export default function Coupon() {
  return (
    <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
      <h5>
        Have a coupon?{" "}
        <a
          className="ltn__secondary-color"
          href="#ltn__coupon-code"
          data-bs-toggle="collapse"
        >
          Click here to enter your code
        </a>
      </h5>
      <div
        id="ltn__coupon-code"
        className="collapse ltn__checkout-single-content-info"
      >
        <div className="ltn__coupon-code-form">
          <p>If you have a coupon code, please apply it below.</p>
          <form action="#">
            <input type="text" name="coupon-code" placeholder="Coupon code" />
            <button className="btn theme-btn-2 btn-effect btn-primary text-uppercase">
              Apply Coupon
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
