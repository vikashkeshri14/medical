import React from "react";
import { useEffect, useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cart";
import { Link } from "react-router-dom";

export default function BestSelling() {
  const [drugs, setDrugs] = useState([]); // State to hold posts
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(0); // Current page (0-indexed)
  const postsPerPage = 8; // Number of posts per page
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
      let params = { url: apiList.getBestselling, body: obj }; //console.log(params);
      let response = await ApiService.postData(params); //console.log(response);
      const data = await response.results.data;
      // console.log(data);
      if (data.length) {
        setDrugs(data); // Set the current page
      }
    } catch (error) {
      console.error("Error fetching posts:", error); //setLoading(false);
    }
  };
  const dispatch = useDispatch();
  const handelCart = (items) => {
    const { id, name, name_ar, image_url, price } = items;
    dispatch(
      addToCart({
        drugId: id,
        name: name,
        name_ar: name_ar,
        img: image_url,
        price: price,
        quantity: 1,
      })
    );
    window.scrollTo(0, 0);
  };
  return (
    <div className="ltn__product-area ltn__product-gutter pt-50 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h1 className="section-title">Best Selling Item</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
          {drugs.length &&
            drugs.map((items, i) => {
              return (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6  col-6">
                  <div className="ltn__product-item min-height-450 ltn__product-item-3 text-center">
                    <div className="product-img p-2 border-b-1">
                      <Link to={"/drug-detail/" + items.id}>
                        <img
                          style={{
                            margin: "auto",
                            height: "250px",
                          }}
                          src={items.image_url}
                          alt="#"
                        />
                      </Link>

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
                    <div className="product-info text-left">
                      <h6 className="text-gray font-12">{items.category}</h6>
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
  );
}
