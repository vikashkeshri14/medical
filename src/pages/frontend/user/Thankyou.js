import React from "react";
import Navbar from "../../../components/frontend/global/navbar";
import HomeMarquee from "../../../components/frontend/section/homeMarquee";
import NewsLetter from "../../../components/frontend/section/newsLetter";
import Footer from "../../../components/frontend/global/footer";
import Complete from "../../../components/frontend/cart/Complete";
export default function Thankyou() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <Complete />
      <NewsLetter />
      <Footer />
    </div>
  );
}
