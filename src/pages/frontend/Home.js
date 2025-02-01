import React from "react";
import Navbar from "../../components/frontend/global/navbar";
import Footer_v1 from "../../components/frontend/global/footer";
import CounterV1 from "../../components/frontend/section/counter-v1";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import ServiceHome from "../../components/frontend/section/serviceHome";
import CategoriesSlider from "../../components/frontend/section/categoriesSlider";
import ProductSlider from "../../components/frontend/section/product-slider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <ServiceHome />
      <CategoriesSlider />
      <CounterV1 />
      <Footer_v1 />
    </div>
  );
}
