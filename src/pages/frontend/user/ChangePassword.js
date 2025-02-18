import React from "react";
import Footer from "../../../components/frontend/global/footer";
import Navbar from "../../../components/frontend/global/navbar";
import HomeMarquee from "../../../components/frontend/section/homeMarquee";
import NewsLetter from "../../../components/frontend/section/newsLetter";
import MyAccount from "../../../components/frontend/user/MyAccount";
import Password from "../../../components/frontend/user/Password";
export default function ChangePassword() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <div className="mt-30">
        <Password />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}
