import React from "react";
import Footer from "../../components/frontend/global/footer";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import CheckoutDetails from "../../components/frontend/cart/CheckoutDetails";

export default function Checkout() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <CheckoutDetails />
      <NewsLetter />
      <Footer />
    </div>
  );
}
