import { useEffect, useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import SlickNextArrow from "../arrowSlick/slickNextArrow";
import SlickPrevArrow from "../arrowSlick/slickPrevArrow";
function CategoriesSlider() {
  const [datas, setDatas] = useState([]);
  var settings = {
    dots: false,

    slidesToShow: 6,
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
          slidesToShow: 8,
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
      let params = { url: apiList.getCategory }; //console.log(params);
      let response = await ApiService.getData(params); //console.log(response);
      const data = await response.results;
      setDatas(data);
    };
    fetchItems();
  }, []);
  return (
    <div className="ltn__category-area home-section-bg pt-50 pb-90">
      <div className="container">
        <h3 className="text-center">Shop By Categories</h3>
        <div className="row slider-container slick-arrow-1 pt-20 ">
          <Slider {...settings}>
            {datas.length &&
              datas.map((items, i) => {
                return (
                  <div key={i} className="col-12  slider-hover">
                    <div className="ltn__category-item border-0 border-radius-10 ltn__category-item-6 text-center">
                      <div className="ltn__category-item-img p-2">
                        <img
                          style={{ margin: "auto", height: "130px" }}
                          src={config.imgUri + "/" + items.images}
                        />
                      </div>
                      <div className="ltn__category-item-name ">
                        <h6>
                          <Link to="" className="font-11 font-weight-600">
                            {items.name}
                          </Link>
                        </h6>
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

export default CategoriesSlider;
