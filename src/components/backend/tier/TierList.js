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

export default function TierList() {
  const [categories, setCategories] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(false); // Loading state
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(0); // Current page (0-indexed)
  const postsPerPage = 10; // Number of posts per page

  useEffect(() => {
    fetchPosts();
  }, [currentPage]); // Re-fetch posts when the currentPage changes

  const fetchPosts = async () => {
    //setLoading(true);
    try {
      // Fetch posts for the current page from the API using _page and _limit

      const obj = {
        currentPage: currentPage + 1,
        postsPerPage: postsPerPage,
      }; //console.log(obj);
      let params = { url: apiList.getTierByPagination, body: obj }; //console.log(params);
      let response = await ApiService.postData(params); //console.log(response);
      const data = await response.results.data;
      if (data.length) {
        setCategories(data); // Set the current page
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
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Tier List</strong>
          </CCardHeader>
          <CCardBody>
            <CForm id="create-project-form" style={{ minHeight: "650px" }}>
              <CContainer>
                <CRow className="align-items-start">
                  <div className="container">
                    <div className="row align-items-start">
                      <table className="table table-light">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col"> Discount</th>
                            <th scope="col">Minimum Value</th>
                            <th scope="col">Type</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {categories.length > 0 ? (
                            categories.map((item, i) => {
                              return (
                                <tr key={i}>
                                  <th scope="row">{item.id}</th>
                                  <td>{item.name}</td>
                                  <td>{item.discount}</td>
                                  <td>{item.minimum_val}</td>
                                  <td>{item.type}</td>
                                  <td>
                                    <Link
                                      className="text-primary"
                                      to={"/admin/update-tier/" + item.id}
                                    >
                                      <i className="fa fa-edit"></i>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td
                                colSpan="6"
                                style={{
                                  textAlign: "center",
                                  fontWeight: "600",
                                }}
                              >
                                No data found
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageLinkClassName={"text-dark"}
                      pageCount={pageCount} // Total number of pages
                      marginPagesDisplayed={2} // How many pages to show at the beginning and end
                      pageRangeDisplayed={3} // How many pages to show around the current page
                      onPageChange={handlePageClick} // What happens when a page is clicked
                      containerClassName={"pagination "} // CSS class for the pagination container
                      activeClassName={"active"} // CSS class for the active page
                    />
                  </div>
                </CRow>
              </CContainer>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
