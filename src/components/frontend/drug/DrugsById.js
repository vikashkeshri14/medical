import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
export default function DrugsById() {
  const slug = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchDrug = async () => {
      const obj = {
        id: slug.id,
      }; //console.log(obj);
      let params = { url: apiList.getDrugById, body: obj }; //console.log(params);
      let response = await ApiService.postData(params); //console.log(response);
      const data = await response.results;
      if (data.length) {
        setItems(data);
      } else {
        return navigate("/");
      }
    };
    fetchDrug();
  }, [slug]);
  return (
    <div class="ltn__shop-details-area mt-20 pb-85">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <div class="ltn__shop-details-inner mb-60">
              <div class="row">
                <div class="col-md-6">
                  <div class="ltn__shop-details-img-gallery">
                    <div class="ltn__shop-details-large-img">
                      {items.length && (
                        <div class="single-large-img">
                          <a
                            href={items[0].image_url}
                            data-rel="lightcase:myCollection"
                          >
                            <img src={items[0].image_url} alt="Image" />
                          </a>
                        </div>
                      )}
                    </div>
                    <div class="ltn__shop-details-small-img slick-arrow-2">
                      {items.length && (
                        <div class="single-small-img">
                          <img src={items[0].image_url} alt="Image" />
                        </div>
                      )}
                    </div>
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
                            <div class="dec qtybutton">-</div>
                            <input
                              type="text"
                              value="02"
                              name="qtybutton"
                              class="cart-plus-minus-box"
                            />
                            <div class="inc qtybutton">+</div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="theme-btn-1 btn btn-primary btn-effect"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            <i class="fas fa-shopping-cart"></i>
                            <span>ADD TO CART</span>
                          </a>
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
                          <a href="#" title="Facebook">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Twitter">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Linkedin">
                            <i class="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Instagram">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div class="ltn__safe-checkout">
                      <h5>Guaranteed Safe Checkout</h5>
                      <img src="img/icons/payment-2.png" alt="Payment Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
              <div class="ltn__shop-details-tab-menu">
                <div class="nav">
                  <a
                    class="active show"
                    data-bs-toggle="tab"
                    href="#liton_tab_details_1_1"
                  >
                    Description
                  </a>
                  <a
                    data-bs-toggle="tab"
                    href="#liton_tab_details_1_2"
                    class=""
                  >
                    Reviews
                  </a>
                </div>
              </div>
              <div class="tab-content">
                <div
                  class="tab-pane fade active show"
                  id="liton_tab_details_1_1"
                >
                  <div class="ltn__shop-details-tab-content-inner">
                    <h4 class="title-2">Lorem ipsum dolor sit amet elit.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem,
                      totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt. Neque
                      porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                </div>
                <div class="tab-pane fade" id="liton_tab_details_1_2">
                  <div class="ltn__shop-details-tab-content-inner">
                    <h4 class="title-2">Customer Reviews</h4>
                    <div class="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star-half-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="far fa-star"></i>
                          </a>
                        </li>
                        <li class="review-total">
                          {" "}
                          <a href="#"> ( 95 Reviews )</a>
                        </li>
                      </ul>
                    </div>
                    <hr />

                    <div class="ltn__comment-area mb-30">
                      <div class="ltn__comment-inner">
                        <ul>
                          <li>
                            <div class="ltn__comment-item clearfix">
                              <div class="ltn__commenter-img">
                                <img src="img/testimonial/1.jpg" alt="Image" />
                              </div>
                              <div class="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div class="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star-half-alt"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="far fa-star"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span class="ltn__comment-reply-btn">
                                  September 3, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="ltn__comment-item clearfix">
                              <div class="ltn__commenter-img">
                                <img src="img/testimonial/3.jpg" alt="Image" />
                              </div>
                              <div class="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div class="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star-half-alt"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="far fa-star"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span class="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="ltn__comment-item clearfix">
                              <div class="ltn__commenter-img">
                                <img src="img/testimonial/2.jpg" alt="Image" />
                              </div>
                              <div class="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div class="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="fas fa-star-half-alt"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i class="far fa-star"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span class="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="ltn__comment-reply-area ltn__form-box mb-30">
                      <form action="#">
                        <h4 class="title-2">Add a Review</h4>
                        <div class="mb-30">
                          <div class="add-a-review">
                            <h6>Your Ratings:</h6>
                            <div class="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star-half-alt"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="far fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="input-item input-item-textarea ltn__custom-icon">
                          <textarea placeholder="Type your comments...."></textarea>
                        </div>
                        <div class="input-item input-item-name ltn__custom-icon">
                          <input type="text" placeholder="Type your name...." />
                        </div>
                        <div class="input-item input-item-email ltn__custom-icon">
                          <input
                            type="email"
                            placeholder="Type your email...."
                          />
                        </div>
                        <div class="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="website"
                            placeholder="Type your website...."
                          />
                        </div>
                        <label class="mb-0">
                          <input type="checkbox" name="agree" /> Save my name,
                          email, and website in this browser for the next time I
                          comment.
                        </label>
                        <div class="btn-wrapper">
                          <button
                            class="btn theme-btn-1 btn-effect-1 text-uppercase"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
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
                  <li>
                    <div class="top-rated-product-item clearfix">
                      <div class="top-rated-product-img">
                        <a href="product-details.html">
                          <img src="img/product/1.png" alt="Image" />
                        </a>
                      </div>
                      <div class="top-rated-product-info">
                        <div class="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h6>
                          <a href="product-details.html">
                            Mixel Solid Seat Cover
                          </a>
                        </h6>
                        <div class="product-price">
                          <span>$49.00</span>
                          <del>$65.00</del>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="top-rated-product-item clearfix">
                      <div class="top-rated-product-img">
                        <a href="product-details.html">
                          <img src="img/product/2.png" alt="Image" />
                        </a>
                      </div>
                      <div class="top-rated-product-info">
                        <div class="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h6>
                          <a href="product-details.html">Thermometer Gun</a>
                        </h6>
                        <div class="product-price">
                          <span>$49.00</span>
                          <del>$65.00</del>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="top-rated-product-item clearfix">
                      <div class="top-rated-product-img">
                        <a href="product-details.html">
                          <img src="img/product/3.png" alt="Image" />
                        </a>
                      </div>
                      <div class="top-rated-product-info">
                        <div class="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fas fa-star-half-alt"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="far fa-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h6>
                          <a href="product-details.html">
                            Coil Spring Conversion
                          </a>
                        </h6>
                        <div class="product-price">
                          <span>$49.00</span>
                          <del>$65.00</del>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="widget ltn__banner-widget">
                <a href="shop.html">
                  <img src="img/banner/2.jpg" alt="Image" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
