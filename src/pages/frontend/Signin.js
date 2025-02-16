import React from "react";
import Footer from "../../components/frontend/global/footer";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import LoginContent from "../../components/frontend/user/LoginContent";

export default function Signin() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <LoginContent />
      <NewsLetter />
      <Footer />
    </div>
  );
}
