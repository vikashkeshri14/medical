import React from "react";
import Footer from "../../components/frontend/global/footer";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import TermContent from "../../components/frontend/global/TermContent";

export default function TermsAndConditions() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <TermContent />
      <NewsLetter />
      <Footer />
    </div>
  );
}
