import React from "react";
import Navbar from "../../components/frontend/global/navbar";
import Footer_v1 from "../../components/frontend/global/footer";
import CounterV1 from "../../components/frontend/section/counter-v1";

export default function Home() {
  return (
    <div>
      <Navbar />
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
      <CounterV1 />
      <Footer_v1 />
    </div>
  );
}
