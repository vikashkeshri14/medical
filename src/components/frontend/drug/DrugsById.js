import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cart";
export default function DrugsById() {
  const slug = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchDrug = async () => {
      const obj = {
        id: slug.id,
      }; //console.log(obj);
      let params = { url: apiList.getDrugById, body: obj }; //console.log(params);
      let response = await ApiService.postData(params); //console.log(response);
      const data = await response.results;
      if (data.length) {
        fetchDrugRand(data[0].category_slug);
        setItems(data);
      } else {
        return navigate("/");
      }
    };
    fetchDrug();
  }, [slug]);

  const fetchDrugRand = async (args) => {
    const obj = {
      slug: args,
    }; //console.log(obj);
    let params = { url: apiList.getrandomDrugByCat, body: obj }; //console.log(params);
    let response = await ApiService.postData(params); //console.log(response);
    const data = await response.results;
    if (data.length) {
      setRelatedProduct(data);
    }
    //console.log(data);
  };

  //add to cart
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
        quantity: qty,
      })
    );
    setQty((qty) => 1);
    window.scrollTo(0, 0);
  };
  return (
    <div class="ltn__shop-details-area mt-20 pb-85">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <div class="ltn__shop-details-inner mb-60">
              <div class="row">
                <div class="col-md-6">
                  <div class="ltn__shop-details-img-gallery">
                    <Carousel
                      showArrows={true}
                      showThumbs={true}
                      showStatus={true}
                      showIndicators={false}
                      autoPlay
                    >
                      <div>
                        <img
                          alt=""
                          src={items.length && items[0].image_url}
                        />
                      </div>
                    </Carousel>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="modal-product-info shop-details-info pl-0">
                    <h3>{items.length && items[0].name}</h3>
                    <div class="product-price">
                      <span>SAR {items.length && items[0].price}</span>
                    </div>
                    <div class="modal-product-meta ltn__product-details-menu-1">
                      <ul>
                        <li>
                          <strong>Categories:</strong>
                          <span>
                            <a href="#">{items.length && items[0].category}</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__product-details-menu-2">
                      <ul>
                        <li>
                          <div class="cart-plus-minus">
                            <div
                              onClick={() => {
                                if (qty > 1) {
                                  setQty((qty) => parseInt(qty) - 1);
                                }
                              }}
                              class="dec qtybutton"
                            >
                              -
                            </div>
                            <input
                              type="number"
                              onChange={(e) => {
                                if (e.target.value > 0) {
                                  setQty(e.target.value);
                                }
                              }}
                              value={qty}
                              name="qtybutton"
                              class="cart-plus-minus-box"
                            />
                            <div
                              onClick={() => setQty((qty) => parseInt(qty) + 1)}
                              class="inc qtybutton"
                            >
                              +
                            </div>
                          </div>
                        </li>
                        <li>
                          <Link
                            onClick={() => handelCart(items[0])}
                            class="theme-btn-1 btn btn-primary btn-effect"
                            title="Add to Cart"
                          >
                            <i class="fas fa-shopping-cart"></i>
                            <span>ADD TO CART</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__product-details-menu-3">
                      <ul>
                        <li>
                          <a
                            href="#"
                            class=""
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                          >
                            <i class="far fa-heart"></i>
                            <span>Add to Wishlist</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class=""
                            title="Compare"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                          >
                            <i class="fas fa-exchange-alt"></i>
                            <span>Compare</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div class="ltn__social-media">
                      <ul>
                        <li>Share:</li>
                        <li>
                          <a
                            href="#"
                            title="Facebook"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Twitter"
                          >
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Linkedin"
                          >
                            <i class="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Instagram"
                          >
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div class="ltn__safe-checkout">
                      <h5>Guaranteed Safe Checkout</h5>
                      <img
                        src="img/icons/payment-2.png"
                        alt="Payment Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="sidebar ltn__shop-sidebar ltn__right-sidebar">
              <div class="widget ltn__top-rated-product-widget">
                <h4 class="ltn__widget-title ltn__widget-title-border">
                  Top Rated Product
                </h4>
                <ul>
                  {relatedProduct.length &&
                    relatedProduct.map((item, i) => {
                      return (
                        <li>
                          <div class="top-rated-product-item clearfix">
                            <div class="top-rated-product-img">
                              <Link to={"/drug-detail/" + item.id}>
                                <img
                                  src={item.image_url}
                                  alt={item.name}
                                  style={{ width: "60px", height: "60px" }}
                                />
                              </Link>
                            </div>
                            <div class="top-rated-product-info">
                              <h6>
                                <Link to={"/drug-detail/" + item.id}>
                                  {item.name}
                                </Link>
                              </h6>
                              <div class="product-price">
                                <span>SAR {item.price}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>

              <div class="widget ltn__banner-widget">
                <a href="shop.html">
                  <img
                    src="img/banner/2.jpg"
                    alt="Image"
                  />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
