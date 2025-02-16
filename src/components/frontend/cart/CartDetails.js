import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function CartDetails() {
  const [totalAmount, setTotalAmount] = useState(0);
  const carts = useSelector((state) => state.cart.items);
  useEffect(() => {
    let val = carts.reduce((acc, data) => {
      acc += data.price * data.quantity;
      return acc;
    }, 0);
    // console.log(val);
    setTotalAmount(val.toFixed(2));
  }, [carts]);
  return (
    <div className="liton__shoping-cart-area mt-40 mb-120">
      <div className="container">
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
                            <td className="cart-product-image">
                              <Link to="#">
                                <img src={data.img} alt="#" />
                              </Link>
                            </td>
                            <td className="cart-product-info">
                              <h4>
                                <Link to="#">{data.name}</Link>
                              </h4>
                            </td>
                            <td className="cart-product-price">{data.price}</td>
                            <td className="cart-product-quantity">
                              <div class="cart-plus-minus">
                                <div class="dec qtybutton">-</div>
                                <input
                                  type="text"
                                  value={data.quantity}
                                  name="qtybutton"
                                  class="cart-plus-minus-box"
                                />
                                <div class="inc qtybutton">+</div>
                              </div>
                            </td>
                            <td className="cart-product-subtotal">
                              SAR {total}
                            </td>
                          </tr>
                        );
                      })}

                    <tr className="cart-coupon-row">
                      <td colSpan={6}>
                        <div className="cart-coupon">
                          <input
                            type="text"
                            name="cart-coupon"
                            placeholder="Coupon code"
                          />
                          &nbsp;
                          <button
                            type="submit"
                            className="btn theme-btn-2 btn-primary ml-1"
                          >
                            Apply Coupon
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          type="submit"
                          className="btn theme-btn-2 btn-secondary disabled"
                        >
                          Update Cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shoping-cart-total mt-50">
                <h4>Cart Totals</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>{totalAmount}</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handing</td>
                      <td>00.00</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>00.00</td>
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
                <div className="btn-wrapper text-right go-top">
                  <Link
                    to="/checkout"
                    className="theme-btn-1 btn-primary btn btn-effect-1"
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
