import React from "react";
import Footer from "../../components/frontend/global/footer";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import RegisterContent from "../../components/frontend/user/RegisterContent";

export default function Register() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <RegisterContent />
      <NewsLetter />
      <Footer />
    </div>
  );
}
