import React, { useEffect, useState } from "react";
import {
  CTable,
  CContainer,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from "@coreui/react";
import ReactPaginate from "react-paginate";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { Link } from "react-router-dom";

export default function List() {
  const [suppliers, setSuppliers] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(false); // Loading state
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(0); // Current page (0-indexed)
  const postsPerPage = 16; // Number of posts per page
  const [keyVal, setkeyVal] = useState("");
  const [suggesation, setSuggesation] = useState([]);
  const [showList, setShowlist] = useState("");
  useEffect(() => {
    fetchPosts();
  }, [currentPage]); // Re-fetch posts when the currentPage changes

  const fetchPosts = async (args = "") => {
    //setLoading(true);
    try {
      // Fetch posts for the current page from the API using _page and _limit

      const obj = {
        currentPage: currentPage + 1,
        postsPerPage: postsPerPage,
        key: args ? args : keyVal,
      }; //console.log(obj);
      let params = { url: apiList.getSupplierByPagination, body: obj }; //console.log(params);
      let response = await ApiService.postData(params);
      console.log(response);
      const data = await response.results.data;
      if (data.length) {
        setSuppliers(data); // Set the current page
        const totalPosts = await response.results.totalPage;

        setPageCount(Math.ceil(totalPosts / postsPerPage)); // Set total number of pages
      }
    } catch (error) {
      console.error("Error fetching posts:", error); //setLoading(false);
    }
  }; // Handle page click
  const handlePageClick = (data) => {
    setCurrentPage(data.selected); // React-paginate passes selected page (0-indexed)
  };

  const searchData = async (args) => {
    setkeyVal(args);
    //console.log()
    setSuggesation((suggesation) => []);
    fetchPosts(args);
    //console.log(args);
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-12 text-right">
          <div
            style={{ float: "right" }}
            className="col-lg-3  mb-2"
          >
            <input
              value={keyVal}
              type="text"
              style={{ borderRadius: "10px" }}
              className="form-control border-radius-10"
              placeholder="Search drugs"
              onChange={(e) => {
                setkeyVal(e.target.value);
              }}
            />
          </div>
        </div>
        {suppliers.length > 0 &&
          suppliers.map((items, i) => {
            return (
              <div
                key={i}
                className="col-md-12 col-lg-3 mb-10 "
              >
                <div className="card">
                  <div className="d-flex justify-content-between p-3">
                    <div
                      className="d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <div className="text-white mb-0 small">
                        <Link
                          onClick={() =>
                            setShowlist((showList) =>
                              showList == items.id ? "" : items.id
                            )
                          }
                          className="text-primary"
                        >
                          <i className="fa fa-list"></i>
                        </Link>
                        <ul
                          class={
                            showList == items.id
                              ? "dropdown-menu block broder-radius-0 pt-0"
                              : "dropdown-menu broder-radius-0  pt-0"
                          }
                          role="menu"
                          placement="bottom-end"
                        >
                          <li>
                            <Link className="dropdown-item text-warning">
                              <i className="fa fa-pen"></i> Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className=" text-right">
                      {items.hotdeal && (
                        <span className="text-danger">
                          <i className="fa fa-fire"></i>
                        </span>
                      )}
                      {items.bestdeal && (
                        <span className="text-success">
                          <i className="fa fa-cart-shopping"></i>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="align-items-center text-center justify-content-center"></div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0 font-12">{items.name}</h5>
                      <h5 className="text-dark font-12 mb-0">
                        SAR {items.price}
                      </h5>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available:{" "}
                        <span className="fw-bold">{items.stock}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {suppliers.length > 0 && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount} // Total number of pages
          marginPagesDisplayed={2} // How many pages to show at the beginning and end
          pageRangeDisplayed={3} // How many pages to show around the current page
          onPageChange={handlePageClick} // What happens when a page is clicked
          containerClassName={"pagination"} // CSS class for the pagination container
          activeClassName={"active"} // CSS class for the active page
        />
      )}
    </section>
  );
}
