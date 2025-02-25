import React from "react";
import Footer from "../../../components/frontend/global/footer";
import Navbar from "../../../components/frontend/global/navbar";
import HomeMarquee from "../../../components/frontend/section/homeMarquee";
import NewsLetter from "../../../components/frontend/section/newsLetter";
import OrderDetailById from "../../../components/frontend/user/OrderDetailById";
export default function OrderDetails() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />

      <OrderDetailById />

      <NewsLetter />
      <Footer />
    </div>
  );
}
