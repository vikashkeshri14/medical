import React, { Component } from "react";
import { Link } from "react-router-dom";

class CopyRight extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__copyright-area ltn__copyright-2 border-top-1 section-bg-7  plr--5">
        <div className="container-fluid ltn__border-top-2">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="ltn__copyright-design text-center footer-text clearfix">
                <p className="footer-text font-12">
                  ©2024 Medmart. All Rights Reserved. Designed by mvrservices.in
                  <span className="current-year" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
