import React from "react";
import Footer from "../../components/frontend/global/footer";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";

export default function About() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <NewsLetter />
      <Footer />
    </div>
  );
}
