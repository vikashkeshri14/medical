import React from "react";

export default function HomeMarquee() {
  return (
    <div className="marquee-container overflow-hidden bg-light shadow-sm">
      <div className=" ticker d-flex align-items-center p-1 text-white">
        <marquee>
          <i class="fa-solid fa-bullhorn"></i>&nbsp;&nbsp;
          <b>
            MedMart is AVAILABLE IN RIYADH REGION NOW. COMING SOON OUTSIDE
            RIAYDH.
          </b>
        </marquee>
      </div>
    </div>
  );
}
