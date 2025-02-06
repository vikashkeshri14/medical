import React from "react";

export default function NewsLetter() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className=" section-bg-primary">
      <div className="container">
        <div className="row pt-20 pb-20">
          <div className="col-md-6">
            <div className="d-flex flex-row align-items-center">
              <div className="pr-10">
                <img
                  style={{ width: "95%" }}
                  src={publicUrl + "assets/img/others/icon-envelope-2.png"}
                  alt="newslertter"
                />
              </div>
              <div className="align-items-center">
                <h6 className="text-uppercase font-30 text-white">
                  sign up for newsletter
                </h6>
                <p className="font-12 text-white font-weight-600 mb-0">
                  Get in now with a 30% finance deal from us
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-newsletter">
              <form action="#">
                <input type="email" name="email" placeholder="Email*" />
                <div className="btn-wrapper">
                  <button className="theme-btn-1 bg-black btn" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
