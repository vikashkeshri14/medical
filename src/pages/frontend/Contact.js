import React from "react";
import Navbar from "../../components/frontend/global/navbar";
import HomeMarquee from "../../components/frontend/section/homeMarquee";
import NewsLetter from "../../components/frontend/section/newsLetter";
import Footer from "../../components/frontend/global/footer";
import ContactInfo from "../../components/frontend/global/ContactInfo";
import ContactContent from "../../components/frontend/global/ContactContent";
import Map from "../../components/frontend/global/Map";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <HomeMarquee />
      <ContactInfo />
      <ContactContent />
      <Map />
      <NewsLetter />
      <Footer />
    </div>
  );
}
