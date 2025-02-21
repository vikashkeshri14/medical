import React from "react";
import Footer from "../../../components/frontend/global/footer";
import Navbar from "../../../components/frontend/global/navbar";
import HomeMarquee from "../../../components/frontend/section/homeMarquee";
import NewsLetter from "../../../components/frontend/section/newsLetter";
import Details from "../../../components/frontend/user/Details";
export default function TrackOrder() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <div className="mt-30">
        <Details />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}
