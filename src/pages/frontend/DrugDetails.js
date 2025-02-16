import React, { useEffect, useState } from "react";
import Footer from "../../components/frontend/global/footer";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import DrugsById from "../../components/frontend/drug/DrugsById";

export default function DrugDetails() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <DrugsById />
      <NewsLetter />
      <Footer />
    </div>
  );
}
