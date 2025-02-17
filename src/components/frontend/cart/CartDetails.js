import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart, updateCart } from "../../../features/cart/cart";
export default function CartDetails() {
  const [totalAmount, setTotalAmount] = useState(0);
  //const [qty,setQty]=useState()
  const carts = useSelector((state) => state.cart.items);
  useEffect(() => {
    let val = carts.reduce((acc, data) => {
      acc += data.price * data.quantity;
      return acc;
    }, 0);
    // console.log(val);
    setTotalAmount(val.toFixed(2));
  }, [carts]);

  //add to cart
  const dispatch = useDispatch();
  const handelCart = (items, quantity) => {
    const { drugId, name, name_ar, img, price } = items;

    dispatch(
      updateCart({
        drugId: drugId,
        quantity: quantity,
      })
    );

    //setQty((qty) => 1);
    // window.scrollTo(0, 0);
  };
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
                            <td
                              width="20%"
                              className="cart-product-image"
                            >
                              <Link to="#">
                                <img
                                  src={data.img}
                                  alt="#"
                                />
                              </Link>
                            </td>
                            <td
                              width="30%"
                              className="cart-product-info"
                            >
                              <h4 className="font-14 font-weight-600">
                                <Link to={"/drug-detail/" + data.drugId}>
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
                              <input
                                onChange={(e) =>
                                  handelCart(data, e.target.value)
                                }
                                type="number"
                                min={1}
                                defaultValue={data.quantity}
                                name="qtybutton"
                                style={{ width: "60px" }}
                                className="form-control"
                              />
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
                <div className="btn-wrapper mt-10 text-right go-top">
                  <Link
                    to="/checkout"
                    className="theme-btn-1 btn-primary btn btn-effect"
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
