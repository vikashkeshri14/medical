import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import { useNavigate } from "react-router-dom";
import { clearCarts } from "../../../features/cart/cart";
export default function Payment() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [paymentType, setPaymentType] = useState(1);
  const carts = useSelector((state) => state.cart.items);
  const userinfo = useSelector((state) => state.user.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let val = carts.reduce((acc, data) => {
      acc += data.price * data.quantity;
      return acc;
    }, 0);
    const vatValue = (val * 0.15).toFixed(2);
    setVat(vatValue);
    setSubtotal(val.toFixed(2));
    const ordertotal =
      parseFloat(vatValue) + parseFloat(val) + parseFloat(shipping);
    setTotalAmount(ordertotal.toFixed(2));
  }, [carts]);

  const placeOrder = async () => {
    const obj = {
      itemDetails: carts,
      total: totalAmount,
      vat: vat,
      subtotal: subtotal,
      shipping: shipping,
      userId: userinfo.id,
      paymentType: paymentType,
    };
    let params = { url: apiList.addOrder, body: obj }; //console.log(params);
    let response = await ApiService.postData(params);
    //console.log(response);
    if (response.success) {
      localStorage.removeItem("cart");
      dispatch(clearCarts());
      navigate("/thankyou");
    } else {
      alert("Please try again");
    }
  };
  return (
    <>
      <div className="col-lg-6">
        <div className="ltn__checkout-payment-method mt-50">
          <h4 className="title-2">Payment Method</h4>
          <div id="checkout_accordion_1">
            {/* card */}
            <div className="card">
              <h5
                className="collapsed ltn__card-title"
                data-bs-toggle="collapse"
                data-bs-target="#faq-item-2-1"
                aria-expanded="false"
              >
                Check payments
              </h5>
              <div
                id="faq-item-2-1"
                className="collapse"
                data-bs-parent="#checkout_accordion_1"
              >
                <div className="card-body">
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="card">
              <h5
                className="ltn__card-title"
                data-bs-toggle="collapse"
                data-bs-target="#faq-item-2-2"
                aria-expanded="true"
              >
                Cash on delivery
              </h5>
              <div
                id="faq-item-2-2"
                className="collapse show"
                data-bs-parent="#checkout_accordion_1"
              >
                <div className="card-body">
                  <p>Pay with cash upon delivery.</p>
                </div>
              </div>
            </div>
            {/* card */}
          </div>
          <div className="ltn__payment-note mt-30 mb-30">
            <p>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>
          <button
            className="btn theme-btn-1 btn-effect btn-primary text-uppercase"
            type="button"
            onClick={() => {
              placeOrder();
            }}
          >
            Place order
          </button>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="shoping-cart-total mt-50">
          <h4 className="title-2">Cart Totals</h4>
          <table className="table">
            <tbody>
              {carts.length &&
                carts.map((data, i) => {
                  let total = data.quantity * data.price;
                  return (
                    <tr key={i}>
                      <td>
                        {data.name} <strong>× {data.quantity}</strong>
                      </td>
                      <td>SAR {total.toFixed(2)}</td>
                    </tr>
                  );
                })}
              <tr>
                <td>Sub Total</td>
                <td>SAR {subtotal}</td>
              </tr>
              <tr>
                <td>Shipping and Handing</td>
                <td>SAR {shipping}</td>
              </tr>
              <tr>
                <td>Vat</td>
                <td>SAR {vat}</td>
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
        </div>
      </div>
    </>
  );
}
