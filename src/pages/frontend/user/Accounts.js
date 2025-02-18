import React from "react";
import Footer from "../../../components/frontend/global/footer";
import Navbar from "../../../components/frontend/global/navbar";
import HomeMarquee from "../../../components/frontend/section/homeMarquee";
import NewsLetter from "../../../components/frontend/section/newsLetter";
import MyAccount from "../../../components/frontend/user/MyAccount";

export default function Accounts() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <div className="mt-30">
        <MyAccount />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}
