import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import config from "../../../config/config.json";
import ReactPaginate from "react-paginate";

import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import moment from "moment/moment";

export default function OrderDetailById() {
  const [carts, setCarts] = useState([]);
  const slug = useParams();
  const userinfo = useSelector((state) => state.user.items);
  const [totalAmount, setTotalAmount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [shipping, setShipping] = useState(0);
  useEffect(() => {
    const fetchItemById = async () => {
      const obj = {
        token: slug.id,
      };
      let params = { url: apiList.getOrderByToken, body: obj }; //console.log(params);
      let response = await ApiService.postData(params);
      const data = await response.results;
      setCarts(data.items);
      setTotalAmount(data.order[0].total);
      setShipping(data.order[0].shipping);
      setVat(data.order[0].vat);
      setSubtotal(data.order[0].subtotal);
    };
    fetchItemById();
  }, [slug]);
  return (
    <div className="liton__wishlist-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <SideBar />
                  </div>
                  <div className="col-lg-8">
                    <div className="tab-content">
                      <div
                        className="tab-pane active show fade"
                        id="liton_tab_1_2"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="shoping-cart-inner">
                              <div className="shoping-cart-table table-responsive">
                                <table className="table">
                                  <tbody>
                                    {carts.length &&
                                      carts.map((data, i) => {
                                        let total = data.quantity * data.price;
                                        return (
                                          <tr key={i}>
                                            <td
                                              width="20%"
                                              className="cart-product-image"
                                            >
                                              <Link to="#">
                                                <img
                                                  src={data.image_url}
                                                  alt="#"
                                                />
                                              </Link>
                                            </td>
                                            <td
                                              width="30%"
                                              className="cart-product-info"
                                            >
                                              <h4 className="font-14 font-weight-600">
                                                <Link
                                                  to={
                                                    "/drug-detail/" +
                                                    data.drugId
                                                  }
                                                >
                                                  {data.name}
                                                </Link>
                                              </h4>
                                            </td>
                                            <td
                                              width="15%"
                                              className="cart-product-price"
                                            >
                                              SAR {data.price}
                                            </td>
                                            <td
                                              width="10%"
                                              className="cart-product-quantity"
                                            >
                                              {data.quantity}
                                            </td>
                                            <td
                                              width="20%"
                                              className="cart-product-subtotal"
                                            >
                                              SAR {total.toFixed(2)}
                                            </td>
                                          </tr>
                                        );
                                      })}
                                  </tbody>
                                </table>
                              </div>
                              <div className="shoping-cart-total mt-50">
                                <h4>Cart Totals</h4>
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td>Cart Subtotal</td>
                                      <td>{subtotal}</td>
                                    </tr>
                                    <tr>
                                      <td>Shipping and Handing</td>
                                      <td>{shipping}</td>
                                    </tr>
                                    <tr>
                                      <td>Vat</td>
                                      <td>{vat}</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <strong>Order Total</strong>
                                      </td>
                                      <td>
                                        <strong>SAR {totalAmount}</strong>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="btn-wrapper mt-10 text-right go-top">
                                  <Link
                                    to="/orders"
                                    className="theme-btn-1 btn-primary btn btn-effect"
                                  >
                                    Back
                                  </Link>
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
        </div>
      </div>
    </div>
  );
}
