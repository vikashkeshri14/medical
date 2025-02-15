import { useContext, useEffect, useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { Link } from "react-router-dom";
import Sidebar from "./shop-sidebar";
import ReactPaginate from "react-paginate";
import { FilterContext } from "../../../context/FilterProvider";
export default function DrugList() {
  const [drugs, setDrugs] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(false); // Loading state
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(0); // Current page (0-indexed)
  const postsPerPage = 15; // Number of posts per page
  const [keyVal, setkeyVal] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { priceFilter, filterCategories, setTotalDrugs } =
    useContext(FilterContext);
  useEffect(() => {
    fetchPosts();
  }, [currentPage, filterCategories]); // Re-fetch posts when the currentPage changes

  const fetchPosts = async (args = "", srt = "") => {
    //setLoading(true);
    try {
      // Fetch posts for the current page from the API using _page and _limit
      const obj = {
        currentPage: currentPage + 1,
        postsPerPage: postsPerPage,
        key: args ? args : keyVal,
        sortBy: srt ? srt : sortBy,
        categories: filterCategories,
      };
      //console.log(obj);
      let params = { url: apiList.getDrugByPagination, body: obj }; //console.log(params);
      let response = await ApiService.postData(params); //console.log(response);
      const data = await response.results.data;
      if (data.length) {
        setDrugs(data); // Set the current page
        const totalPosts = await response.results.totalPage;
        console.log(totalPosts);
        setTotalDrugs(totalPosts);
        setPageCount(Math.ceil(totalPosts / postsPerPage)); // Set total number of pages
      }
    } catch (error) {
      console.error("Error fetching posts:", error); //setLoading(false);
    }
  }; // Handle page click
  const handlePageClick = (data) => {
    setCurrentPage(data.selected); // React-paginate passes selected page (0-indexed)
  };

  //console.log(filterCategories);
  return (
    <div className="pt-50">
      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 order-lg-2 mb-100">
              <div className="ltn__shop-options mb-10">
                <ul className="justify-content-start">
                  <li>
                    <div className="ltn__grid-list-tab-menu ">
                      <div className="nav">
                        <a
                          className="active show"
                          data-bs-toggle="tab"
                          href="#liton_product_grid"
                        >
                          <i className="fas fa-th-large" />
                        </a>
                        <a data-bs-toggle="tab" href="#liton_product_list">
                          <i className="fas fa-list" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="d-none">
                    <div className="showing-product-number text-right">
                      <span>Showing 1–12 of 18 results</span>
                    </div>
                  </li>
                  <li>
                    <div className=" text-center">
                      <select
                        onChange={(e) => {
                          setSortBy((sortBy) => e.target.value);
                          fetchPosts(keyVal, e.target.value);
                        }}
                        value={sortBy}
                        className="form-control"
                      >
                        <option value="">Default Sorting</option>
                        <option value="1">Sort by price: low to high</option>
                        <option value="2">Sort by price: high to low</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className=" text-center">
                      <select className="form-control">
                        <option>Per Page: 12</option>
                        <option>Per Page: 20</option>
                        <option>Per Page: 30</option>
                        <option>Per Page: 50</option>
                        <option>Per Page: 100</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="liton_product_grid"
                >
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      {drugs.length &&
                        drugs.map((items, i) => {
                          return (
                            <div key={i} className="col-xl-4 col-sm-4 col-12">
                              <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                <div className="product-img p-2 text-center  go-top">
                                  <Link to="/product-details">
                                    <img
                                      style={{
                                        margin: "auto",

                                        height: "250px",
                                      }}
                                      src={items.image_url}
                                      alt="#"
                                    />
                                  </Link>
                                </div>
                                <div className="product-info pt-1">
                                  <ul className="ltn__list-item-2--- mb-1 ltn__list-item-2-before--- ltn__plot-brief">
                                    <li className="font-12 pt-1 mt-1">
                                      {items.category}
                                    </li>
                                  </ul>
                                  <div className="product-img-location go-top">
                                    <ul>
                                      <li className="mt-1">
                                        <Link
                                          className="font-weight-600"
                                          to="/contact"
                                        >
                                          {items.name}
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="product-hover-action mt-2">
                                    <ul>
                                      <li>
                                        <a
                                          href="#"
                                          title="Quick View"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick_view_modal"
                                        >
                                          <i className="flaticon-expand" />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          title="Wishlist"
                                          data-bs-toggle="modal"
                                          data-bs-target="#liton_wishlist_modal"
                                        >
                                          <i className="flaticon-heart-1" />
                                        </a>
                                      </li>
                                      <li className="go-top">
                                        <Link
                                          to="/product-details"
                                          title="Product Details"
                                        >
                                          <i className="flaticon-add" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="product-info-bottom">
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
                <div className="tab-pane fade" id="liton_product_list">
                  <div className="ltn__product-tab-content-inner ltn__product-list-view">
                    <div className="row">
                      {drugs.length &&
                        drugs.map((items, i) => {
                          return (
                            <div key={i} className="col-lg-12">
                              <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                                <div className="product-img go-top">
                                  <Link to="/product-details">
                                    <img
                                      style={{ height: "150px" }}
                                      src={items.image_url}
                                      alt="#"
                                    />
                                  </Link>
                                </div>
                                <div className="product-info">
                                  <div className="product-badge-price">
                                    <div className="product-badge">
                                      <ul>
                                        <li className="">{items.category}</li>
                                      </ul>
                                    </div>
                                    <div className="product-price">
                                      <span>SAR {items.price}</span>
                                    </div>
                                  </div>
                                  <h2 className="product-title go-top">
                                    <Link to="/product-details">
                                      {items.name}
                                    </Link>
                                  </h2>
                                </div>
                                <div className="product-info-bottom">
                                  <div className="product-hover-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="#"
                                          title="Quick View"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick_view_modal"
                                        >
                                          <i className="flaticon-expand" />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          title="Wishlist"
                                          data-bs-toggle="modal"
                                          data-bs-target="#liton_wishlist_modal"
                                        >
                                          <i className="flaticon-heart-1" />
                                        </a>
                                      </li>
                                      <li className="go-top">
                                        <Link
                                          to="/product-details"
                                          title="Product Details"
                                        >
                                          <i className="flaticon-add" />
                                        </Link>
                                      </li>
                                    </ul>
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

              <div className="ltn__pagination-area text-center">
                <div className="ltn__pagination">
                  <ReactPaginate
                    previousLabel={<i className="fas fa-angle-double-left" />}
                    nextLabel={<i className="fas fa-angle-double-right" />}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount} // Total number of pages
                    marginPagesDisplayed={2} // How many pages to show at the beginning and end
                    pageRangeDisplayed={3} // How many pages to show around the current page
                    onPageChange={handlePageClick} // What happens when a page is clicked
                    containerClassName={""} // CSS class for the pagination container
                    activeClassName={"active"} // CSS class for the active page
                    breakLinkClassName={""}
                    pageClassName={""}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={""}
                    nextClassName={""}
                    nextLinkClassName={""}
                  />
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>

      <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="modal-product-img">
                          <img src={"/assets/img/product/7.png"} alt="#" />
                        </div>
                        <div className="modal-product-info go-top">
                          <h5>
                            <Link to="/product-details">
                              Brake Conversion Kit
                            </Link>
                          </h5>
                          <p className="added-cart">
                            <i className="fa fa-check-circle" /> Successfully
                            added to your Wishlist
                          </p>
                          <div className="btn-wrapper">
                            <Link
                              to="/wishlist"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              View Wishlist
                            </Link>
                          </div>
                        </div>
                        {/* additional-info */}
                        <div className="additional-info d-none">
                          <p>
                            We want to give you <b>10% discount</b> for your
                            first order, <br /> Use discount code at checkout
                          </p>
                          <div className="payment-method">
                            <img
                              src={"/assets/img/icons/payment.png"}
                              alt="#"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ltn__modal-area ltn__quick-view-modal-area">
        <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                  {/* <i class="fas fa-times"></i> */}
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="modal-product-img">
                          <img src={"/assets/img/product/4.png"} alt="#" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="modal-product-info">
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
                              <li className="review-total">
                                {" "}
                                <a href="#"> ( 95 Reviews )</a>
                              </li>
                            </ul>
                          </div>
                          <h3>Brake Conversion Kit</h3>
                          <div className="product-price">
                            <span>$149.00</span>
                            <del>$165.00</del>
                          </div>
                          <div className="modal-product-meta ltn__product-details-menu-1">
                            <ul>
                              <li>
                                <strong>Categories:</strong>
                                <span className="go-top">
                                  <Link to="/blog">Parts</Link>
                                  <Link to="/blog">Car</Link>
                                  <Link to="/blog">Seat</Link>
                                  <Link to="/blog">Cover</Link>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="ltn__product-details-menu-2">
                            <ul>
                              <li>
                                <div className="cart-plus-minus">
                                  <input
                                    type="text"
                                    defaultValue="02"
                                    name="qtybutton"
                                    className="cart-plus-minus-box"
                                  />
                                </div>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="theme-btn-1 btn btn-effect-1"
                                  title="Add to Cart"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add_to_cart_modal"
                                >
                                  <i className="fas fa-shopping-cart" />
                                  <span>ADD TO CART</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <hr />
                          <div className="ltn__social-media">
                            <ul>
                              <li>Share:</li>
                              <li>
                                <a href="#" title="Facebook">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Twitter">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Linkedin">
                                  <i className="fab fa-linkedin" />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Instagram">
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="modal-product-img">
                          <img src={"/assets/img/product/1.png"} alt="#" />
                        </div>
                        <div className="modal-product-info go-top">
                          <h5 className="go-top">
                            <Link to="/product-details">
                              Brake Conversion Kit
                            </Link>
                          </h5>
                          <p className="added-cart">
                            <i className="fa fa-check-circle" />
                            Successfully added to your Cart
                          </p>
                          <div className="btn-wrapper">
                            <Link
                              to="/cart"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              View Cart
                            </Link>
                            <Link
                              to="/checkout"
                              className="theme-btn-2 btn btn-effect-2"
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                        {/* additional-info */}
                        <div className="additional-info d-none">
                          <p>
                            We want to give you <b>10% discount</b> for your
                            first order, <br /> Use discount code at checkout
                          </p>
                          <div className="payment-method">
                            <img
                              src={"/assets/img/icons/payment.png"}
                              alt="#"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
