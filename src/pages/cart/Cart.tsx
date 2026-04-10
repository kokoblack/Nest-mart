import { FaArrowsRotate } from "react-icons/fa6";
import { MdOutlineNoteAlt } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { button } from "../../style/recipe/button";
import CartHeader from "../../components/global/CartHeader";
import DelProduct from "../../components/global/DelProduct";
import DesktopCartList from "../../components/global/DesktopCartList";
import Banner from "../../components/global/Banner";
import MobileCartList from "../../components/global/MobileCartList";
import {
  cartCalShipInput,
  cartCalShipSec,
  cartCalShipState,
  cartCheckoutCont,
  cartCheckoutHR,
  cartCheckoutMain,
  cartCheckoutShip,
  cartCheckoutTotal,
  cartCont,
  cartCouponCont,
  cartCouponInputCont,
  cartFirstCont,
  cartNoItems,
  cartSecondCont,
} from "../../style/pages/cart/cart";
import { useCartStore } from "../../redux/CartReducer";
import { Link } from "react-router-dom";
import { desktopCartListTableCont } from "../../style/component/global/desktopCartList";

const Cart = () => {
  const { items, totalAmount } = useCartStore();

  return (
    <main className={css(cartCont)}>
      <section
        className={css(
          cartFirstCont,
          flex.raw({ columnGap: "xlg", type: "startY" }),
        )}
      >
        <section className={css({ w: "fit-content" })}>
          <section className={css(flex.raw({ type: "endY", columnGap: "md" }))}>
            <CartHeader heading="Your Cart" total={items.length} />
            {items.length !== 0 && <DelProduct type="cart" />}
          </section>

          <section className={css(cartNoItems)}>
            {items.length === 0 && <p>Your cart is empty</p>}
          </section>

          <section className={css({ hideBelow: "660px" })}>
            {items.length !== 0 && (
              <table className={css(desktopCartListTableCont)}>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>

                {items.map((items, index) => (
                  <DesktopCartList
                    key={index}
                    img={items.img}
                    type="cart"
                    name={items.name}
                    price={items.price}
                    subtotal={items.subTotal!}
                    quantity={items.quantity!}
                  />
                ))}
              </table>
            )}
          </section>

          <section className={css({ hideFrom: "661px" })}>
            {items.map((items, index) => (
              <MobileCartList
                key={index}
                img={items.img}
                type="cart"
                name={items.name}
                price={items.price}
                quantity={items.quantity!}
              />
            ))}
          </section>

          <section className={css(cartSecondCont)}>
            <section className={css(flex.raw({ columnGap: "md" }))}>
              <button
                className={css(
                  button.raw({ px: "lg", py: "sm" }),
                  flex.raw({ columnGap: "sm" }),
                )}
              >
                <i>
                  <FaLongArrowAltLeft />
                </i>
                <Link to="/shop">Continue Shopping</Link>
              </button>
              <button
                className={css(
                  button.raw({ px: "lg", py: "sm" }),
                  flex.raw({ columnGap: "sm" }),
                  {
                    ml: "auto",
                  },
                )}
              >
                <i>
                  <FaArrowsRotate />
                </i>
                <p>Update Cart</p>
              </button>
            </section>

            <section
              className={css(flex.raw({ columnGap: "xlg", type: "startY" }), {
                mt: "2rem",
              })}
            >
              <section className={css(cartCalShipSec)}>
                <h3>Calculate Shipping</h3>
                <p>
                  Flate rate: <span>5%</span>
                </p>

                <div className={css(cartCalShipState, flex.raw())}>
                  <p>United State</p>
                  <p>-</p>
                </div>

                <div
                  className={css(
                    cartCalShipInput,
                    flex.raw({ columnGap: "md" }),
                  )}
                >
                  <input placeholder="State / Country" />
                  <input placeholder="PostCode / Zip" />
                </div>
              </section>

              <section className={css(cartCouponCont)}>
                <h3>Apply Coupon</h3>
                <p>Using A Promo Code?</p>

                <div
                  className={css(
                    cartCouponInputCont,
                    flex.raw({ columnGap: "md", type: "startX" }),
                  )}
                >
                  <input placeholder="Enter Your Coupon" />
                  <button
                    className={css(
                      button.raw({ px: "lg", py: "sm" }),
                      flex.raw({ columnGap: "sm" }),
                    )}
                  >
                    <i>
                      <MdOutlineNoteAlt />
                    </i>
                    <p>Apply</p>
                  </button>
                </div>
              </section>
            </section>
          </section>
        </section>

        {items.length !== 0 && (
          <section className={css(cartCheckoutMain)}>
            <div className={css(cartCheckoutCont)}>
              <div className={css(cartCheckoutTotal)}>
                <p>Subtotal</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>

              <hr />
              <hr className={css(cartCheckoutHR)} />
              <hr />

              <div className={css(cartCheckoutShip)}>
                <p>shipping</p>
                <p>Free</p>
              </div>

              <hr />

              <div className={css(cartCheckoutShip)}>
                <p>Estimate for</p>
                <p>United Kingdom</p>
              </div>

              <hr />
              <hr className={css(cartCheckoutHR)} />
              <hr />

              <div className={css(cartCheckoutTotal)}>
                <p>Total</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
            </div>

            <button
              className={css(button.raw({ px: "lg", py: "sm" }), flex.raw(), {
                w: "100%",
                mt: ".5rem",
              })}
            >
              <Link to="/checkout">Proceed To Checkout</Link>
              <i>
                <FaArrowRightFromBracket />
              </i>
            </button>
          </section>
        )}
      </section>

      <Banner id={1} />
    </main>
  );
};

export default Cart;
