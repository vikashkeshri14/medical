import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../config/config.json";
import ReactPaginate from "react-paginate";

import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import moment from "moment/moment";
export default function OrderDetails() {
  const [orders, setOrders] = useState([]);
  const userinfo = useSelector((state) => state.user.items);
  const [totalOrder, setTotalOrder] = useState(0);
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(0); // Current page (0-indexed)
  const postsPerPage = 15; // Number of posts per page
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const obj = {
          user_id: userinfo.id,
          currentPage: currentPage + 1,
          postsPerPage: postsPerPage,
        };
        let params = { url: apiList.getOrderByUserId, body: obj }; //console.log(params);
        let response = await ApiService.postData(params);
        const data = await response.results.data;
        if (data.length) {
          setOrders(data); // Set the current page
          const totalPosts = await response.results.totalPage;
          //console.log(totalPosts);
          setTotalOrder(totalPosts);
          setPageCount(Math.ceil(totalPosts / postsPerPage)); // Set total number of pages
        }
      } catch (error) {
        console.error("Error fetching posts:", error); //setLoading(false);
      }
    };
    fetchItems();
  }, [currentPage]);
  const handlePageClick = (data) => {
    setCurrentPage(data.selected); // React-paginate passes selected page (0-indexed)
  };
  return (
    <div className="liton__wishlist-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* PRODUCT TAB AREA START */}
            <div className="ltn__product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <SideBar />
                  </div>
                  <div className="col-lg-8">
                    <div className="tab-content">
                      <div class="tab-pane active show fade" id="liton_tab_1_2">
                        <div className="">
                          <div class="ltn__myaccount-tab-content-inner">
                            <div class="table-responsive">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Sub Total</th>
                                    <th>Vat</th>
                                    <th>Shipping</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {orders.length > 0 ? (
                                    orders.map((data, i) => {
                                      return (
                                        <tr key={i}>
                                          <td>{data.id}</td>
                                          <td>
                                            {moment(data.created_at).format(
                                              "MMM Do YYYY, h:mm:ss a"
                                            )}
                                          </td>
                                          <td>
                                            {data.status == 0
                                              ? "pending"
                                              : "complete"}
                                          </td>
                                          <td> {data.subtotal}</td>
                                          <td> {data.vat}</td>
                                          <td> {data.shipping}</td>
                                          <td>SAR {data.total}</td>
                                          <td>
                                            <Link
                                              to={"/order-detail/" + data.token}
                                            >
                                              View
                                            </Link>
                                          </td>
                                        </tr>
                                      );
                                    })
                                  ) : (
                                    <tr>
                                      <td colSpan={8}>Empty Order</td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ltn__pagination-area text-center">
                            <div className="ltn__pagination">
                              <ReactPaginate
                                previousLabel={
                                  <i className="fas fa-angle-double-left" />
                                }
                                nextLabel={
                                  <i className="fas fa-angle-double-right" />
                                }
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PRODUCT TAB AREA END */}
          </div>
        </div>
      </div>
    </div>
  );
}
