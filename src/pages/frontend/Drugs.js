import React from "react";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import Footer from "../../components/frontend/global/footer";

export default function Drugs() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <NewsLetter />
      <Footer />
    </div>
  );
}
