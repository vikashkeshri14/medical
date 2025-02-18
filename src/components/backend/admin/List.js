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
  const [items, setItems] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(false); // Loading state
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(0); // Current page (0-indexed)
  const postsPerPage = 10; // Number of posts per page
  const [deleteMessage, setdeleteMessage] = useState(false);
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
      let params = { url: apiList.getAdminListPagination, body: obj }; //console.log(params);
      let response = await ApiService.postData(params); //console.log(response);
      const data = await response.results.data;
      if (data.length) {
        setItems(data); // Set the current page
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
  const deleteAdmin = async (id) => {
    const obj = {
      id: id,
    }; //console.log(obj);
    let params = { url: apiList.deleteAdmin, body: obj }; //console.log(params);
    let response = await ApiService.postData(params); //console.log(response);
    if (response.status) {
      setdeleteMessage(true);
      setTimeout(() => {
        setdeleteMessage(false);
      }, 1000);
      fetchPosts();
    }
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          {deleteMessage && (
            <span
              className="alert alert-success"
              role="alert"
            >
              Admin deleted successfully!
            </span>
          )}

          <CCardHeader>
            <strong>Admin List</strong>{" "}
          </CCardHeader>
          <CCardBody>
            <CForm
              id="create-project-form"
              style={{ minHeight: "650px" }}
            >
              <CContainer>
                <CRow className="align-items-start">
                  <div className="container">
                    <div className="row align-items-start">
                      <table className="table table-light">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Type</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {items.length > 0 ? (
                            items.map((item, i) => {
                              return (
                                <tr key={i}>
                                  <th scope="row">{item.id}</th>
                                  <td>{item.name}</td>
                                  <td>{item.email}</td>
                                  <td>{item.phone}</td>
                                  <td>
                                    {item.role == "1"
                                      ? "Super Admin"
                                      : "Warehouse"}
                                  </td>
                                  <td>
                                    <Link
                                      className="text-primary"
                                      to={"/admin/update-admin/" + item.id}
                                    >
                                      <i className="fa fa-edit"></i>
                                    </Link>
                                    &nbsp;
                                    <Link
                                      className="text-danger"
                                      onClick={() => deleteAdmin(item.id)}
                                    >
                                      <i className="fa fa-trash"></i>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td
                                colSpan="5"
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
