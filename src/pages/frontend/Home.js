import React from "react";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import ServiceHome from "../../components/frontend/section/serviceHome";
import CategoriesSlider from "../../components/frontend/section/categoriesSlider";
import BestSelling from "../../components/frontend/section/bestSelling";
import ShopByBrand from "../../components/frontend/section/shopByBrand";
import ListOrder from "../../components/frontend/section/listOrder";
import CounterSlider from "../../components/frontend/section/counterSlider";
import WhyChooseUs from "../../components/frontend/section/whyChooseUs";
import PlatformMedicine from "../../components/frontend/section/platformMedicine";
import NewsLetter from "../../components/frontend/section/newsLetter";
import HotDeals from "../../components/frontend/section/hotDeals";
import Footer from "../../components/frontend/global/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <ServiceHome />
      <CategoriesSlider />
      <HotDeals />
      <BestSelling />
      <ShopByBrand />
      <ListOrder />
      <CounterSlider />
      <WhyChooseUs />
      <PlatformMedicine />
      <NewsLetter />
      <Footer />
    </div>
  );
}
