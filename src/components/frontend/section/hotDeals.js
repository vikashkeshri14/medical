import React from "react";
import { useEffect, useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../features/cart/cart";
export default function HotDeals() {
  const [drugs, setDrugs] = useState([]); // State to hold posts
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(0); // Current page (0-indexed)
  const postsPerPage = 4; // Number of posts per page
  useEffect(() => {
    fetchPosts();
  }, []); // Re-fetch posts when the currentPage changes
  const fetchPosts = async () => {
    //setLoading(true);
    try {
      // Fetch posts for the current page from the API using _page and _limit

      const obj = {
        currentPage: currentPage + 1,
        postsPerPage: postsPerPage,
      }; //console.log(obj);
      let params = { url: apiList.getHotdeal, body: obj }; //console.log(params);
      let response = await ApiService.postData(params); //console.log(response);
      const data = await response.results.data;
      //console.log(data);
      if (data.length) {
        setDrugs(data); // Set the current page
      }
    } catch (error) {
      console.error("Error fetching posts:", error); //setLoading(false);
    }
  };
  const cart = useSelector((state) => state.cart.items);
  //console.log(cart);
  const dispatch = useDispatch();
  const handelCart = (items) => {
    const { id, name, name_ar, image_url } = items;
    dispatch(
      addToCart({
        drugId: id,
        name: name,
        name_ar: name_ar,
        img: image_url,
        quantity: 1,
      })
    );
  };

  return (
    <div className="section-deal">
      <div className="container mt-2 mb-2 section-deal-bg">
        <div className="row p-3">
          <div className="col-md-2">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h1 className="section-title font-32">
                  Hot Deals Up To <span className="text-danger">45% </span>Off
                </h1>
                <p className="footer-text font-12">Hurry Up! Offer end soon</p>
                <div className="pt-30">
                  <a
                    className="theme-btn-1 pl-12 pt-2 pb-2 pr-12 font-12 btn btn-effect-1 "
                    href="#/about"
                    tabIndex="0"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              {drugs.length &&
                drugs.map((items, i) => {
                  return (
                    <div
                      key={i}
                      className="col-lg-3--- col-md-3 col-sm-6 col-6"
                    >
                      <div className="ltn__product-item ltn__product-item-2 text-left">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img
                              style={{
                                margin: "auto",

                                height: "250px",
                              }}
                              src={items.image_url}
                              alt="#"
                            />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge btn-danger">Sale</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  title="Quick View"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick_view_modal"
                                >
                                  <i className="far fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <Link
                                  onClick={() => handelCart(items)}
                                  title="Add to Cart"
                                >
                                  <i className="fas fa-shopping-cart"></i>
                                </Link>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-bs-toggle="modal"
                                  data-bs-target="#liton_wishlist_modal"
                                >
                                  <i className="far fa-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <h2 className="product-title">
                            <a href="product-details.html">{items.name}</a>
                          </h2>
                          <div className="product-price">
                            <span>SAR {items.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
