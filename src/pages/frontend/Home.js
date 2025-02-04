import React from "react";
import Navbar from "../../components/frontend/global/navbar";
import Footer_v1 from "../../components/frontend/global/footer";
import CounterV1 from "../../components/frontend/section/counter-v1";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import ServiceHome from "../../components/frontend/section/serviceHome";
import CategoriesSlider from "../../components/frontend/section/categoriesSlider";
import ProductSlider from "../../components/frontend/section/product-slider";
import BestSelling from "../../components/frontend/section/bestSelling";
import ShopByBrand from "../../components/frontend/section/shopByBrand";
import ListOrder from "../../components/frontend/section/listOrder";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <ServiceHome />
      <CategoriesSlider />
      <BestSelling />
      <ShopByBrand />
      <ListOrder />
      <CounterV1 />
      <Footer_v1 />
    </div>
  );
}
