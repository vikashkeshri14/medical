import React from "react";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import Footer from "../../components/frontend/global/footer";
import DrugList from "../../components/frontend/drug/DrugList";
import FilterProvider from "../../context/FilterProvider";

export default function Drugs() {
  return (
    <FilterProvider>
      <div>
        <Navbar />
        <HomeMarquee />
        <DrugList />
        <NewsLetter />
        <Footer />
      </div>
    </FilterProvider>
  );
}
