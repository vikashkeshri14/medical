import { useEffect, useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import SlickNextArrow from "../arrowSlick/slickNextArrow";
import SlickPrevArrow from "../arrowSlick/slickPrevArrow";
import { auto } from "@popperjs/core";
export default function ShopByBrand() {
  const [datas, setDatas] = useState([]);
  var settings = {
    dots: false,

    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

          dots: true,
        },
      },
    ],
  };
  useEffect(() => {
    const fetchItems = async () => {
      let params = { url: apiList.getBrand }; //console.log(params);
      let response = await ApiService.getData(params); //console.log(response);
      const data = await response.results;
      setDatas(data);
    };
    fetchItems();
  }, []);
  return (
    <div class="ltn__category-area home-section-bg pt-50 pb-90">
      <div class="container">
        <h3 className="text-center">Shop By Brand</h3>
        <div class="row slider-container slick-arrow-1 pt-30 ">
          <Slider {...settings}>
            {datas.length &&
              datas.map((items, i) => {
                return (
                  <div class="col-12">
                    <div class="ltn__category-item  border-0 border-radius-10 ltn__category-item-6 text-center">
                      <div class="ltn__category-item-img text-center">
                        <img
                          style={{ height: "170px", margin: auto }}
                          src={config.imgUri + "/" + items.images}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
