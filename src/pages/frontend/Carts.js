import React from "react";
import Footer from "../../components/frontend/global/footer";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import CartDetails from "../../components/frontend/cart/CartDetails";

export default function Carts() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <CartDetails />
      <NewsLetter />
      <Footer />
    </div>
  );
}
