import React from "react";
import Footer from "../../components/frontend/global/footer";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import AboutContent from "../../components/frontend/global/AboutContent";

export default function About() {
  return (
    <>
      <Navbar />
      <HomeMarquee />
      <AboutContent />
      <NewsLetter />
      <Footer />
    </>
  );
}
