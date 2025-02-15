import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import * as ApiService from "../../../config/config";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryFetch = async () => {
      let paramsCity = { url: apiList.getCategoryWithDrugCount };
      let response = await ApiService.getData(paramsCity);
      if (response.results.length > 0) {
        setCategories(response.results);
      }
    };
    categoryFetch();
  }, []);
  return (
    <div className="col-lg-3  mb-100">
      <aside className="sidebar ltn__shop-sidebar">
        <h3 className="mb-0 font-20">Advance Information</h3>
        <label className="mb-10">
          <small className="font-12">About 9,620 results (0.62 seconds) </small>
        </label>
        {/* Advance Information widget */}
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title">Categories</h4>
          <ul>
            {categories.length &&
              categories.map((items, i) => {
                if (items.category) {
                  return (
                    <li key={i}>
                      <label className="checkbox-item font-12 font-weight-400">
                        {items.category}
                        <input
                          value={items.category_slug}
                          type="checkbox"
                          defaultChecked="checked"
                        />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no font-12 font-weight-600">
                        {items.cnt}
                      </span>
                    </li>
                  );
                }
              })}
          </ul>
          <hr />

          {/* Price Filter Widget */}
          <div className="widget--- ltn__price-filter-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border---">
              Filter by price
            </h4>
            <div className="price_filter">
              <div className="price_slider_amount">
                <input type="submit" defaultValue="Your range:" />
                <input
                  type="text"
                  className="amount"
                  name="price"
                  placeholder="Add Your Price"
                />
              </div>
              <div className="slider-range" />
            </div>
          </div>
        </div>
        {/* Category Widget */}
        <div className="widget ltn__menu-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Product categories
          </h4>
          <ul>
            <li>
              <a href="#">
                Body{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Interior{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Lights{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Parts{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Tires{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Uncategorized{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Wheel{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* Price Filter Widget */}
        <div className="widget ltn__price-filter-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Filter by price
          </h4>
          <div className="price_filter">
            <div className="price_slider_amount">
              <input type="submit" defaultValue="Your range:" />
              <input
                type="text"
                className="amount"
                name="price"
                placeholder="Add Your Price"
              />
            </div>
            <div className="slider-range" />
          </div>
        </div>
        {/* Top Rated Product Widget */}
        <div className="widget ltn__top-rated-product-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Top Rated Product
          </h4>
          <ul>
            <li>
              <div className="top-rated-product-item clearfix">
                <div className="top-rated-product-img">
                  <a href="product-details.html">
                    <img src="img/product/1.png" alt="#" />
                  </a>
                </div>
                <div className="top-rated-product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h6>
                    <a href="product-details.html">Mixel Solid Seat Cover</a>
                  </h6>
                  <div className="product-price">
                    <span>$49.00</span>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="top-rated-product-item clearfix">
                <div className="top-rated-product-img">
                  <a href="product-details.html">
                    <img src="img/product/2.png" alt="#" />
                  </a>
                </div>
                <div className="top-rated-product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h6>
                    <a href="product-details.html">Brake Conversion Kit</a>
                  </h6>
                  <div className="product-price">
                    <span>$49.00</span>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="top-rated-product-item clearfix">
                <div className="top-rated-product-img">
                  <a href="product-details.html">
                    <img src="img/product/3.png" alt="#" />
                  </a>
                </div>
                <div className="top-rated-product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h6>
                    <a href="product-details.html">Coil Spring Conversion</a>
                  </h6>
                  <div className="product-price">
                    <span>$49.00</span>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Search Widget */}
        <div className="widget ltn__search-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Search Objects
          </h4>
          <form action="#">
            <input
              type="text"
              name="search"
              placeholder="Search your keyword..."
            />
            <button type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
        {/* Tagcloud Widget */}
        <div className="widget ltn__tagcloud-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Popular Tags
          </h4>
          <ul>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">desgin</a>
            </li>
            <li>
              <a href="#">ux</a>
            </li>
            <li>
              <a href="#">usability</a>
            </li>
            <li>
              <a href="#">develop</a>
            </li>
            <li>
              <a href="#">icon</a>
            </li>
            <li>
              <a href="#">Car</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Repairs</a>
            </li>
            <li>
              <a href="#">Auto Parts</a>
            </li>
            <li>
              <a href="#">Oil</a>
            </li>
            <li>
              <a href="#">Dealer</a>
            </li>
            <li>
              <a href="#">Oil Change</a>
            </li>
            <li>
              <a href="#">Body Color</a>
            </li>
          </ul>
        </div>
        {/* Size Widget */}
        <div className="widget ltn__tagcloud-widget ltn__size-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Product Size
          </h4>
          <ul>
            <li>
              <a href="#">S</a>
            </li>
            <li>
              <a href="#">M</a>
            </li>
            <li>
              <a href="#">L</a>
            </li>
            <li>
              <a href="#">XL</a>
            </li>
            <li>
              <a href="#">XXL</a>
            </li>
          </ul>
        </div>
        {/* Color Widget */}
        <div className="widget ltn__color-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Product Color
          </h4>
          <ul>
            <li className="black">
              <a href="#" />
            </li>
            <li className="white">
              <a href="#" />
            </li>
            <li className="red">
              <a href="#" />
            </li>
            <li className="silver">
              <a href="#" />
            </li>
            <li className="gray">
              <a href="#" />
            </li>
            <li className="maroon">
              <a href="#" />
            </li>
            <li className="yellow">
              <a href="#" />
            </li>
            <li className="olive">
              <a href="#" />
            </li>
            <li className="lime">
              <a href="#" />
            </li>
            <li className="green">
              <a href="#" />
            </li>
            <li className="aqua">
              <a href="#" />
            </li>
            <li className="teal">
              <a href="#" />
            </li>
            <li className="blue">
              <a href="#" />
            </li>
            <li className="navy">
              <a href="#" />
            </li>
            <li className="fuchsia">
              <a href="#" />
            </li>
            <li className="purple">
              <a href="#" />
            </li>
            <li className="pink">
              <a href="#" />
            </li>
            <li className="nude">
              <a href="#" />
            </li>
            <li className="orange">
              <a href="#" />
            </li>
            <li>
              <a href="#" className="orange" />
            </li>
            <li>
              <a href="#" className="orange" />
            </li>
          </ul>
        </div>
        {/* Banner Widget */}
        <div className="widget ltn__banner-widget d-none">
          <a href="shop.html">
            <img src="img/banner/banner-2.jpg" alt="#" />
          </a>
        </div>
      </aside>
    </div>
  );
}
