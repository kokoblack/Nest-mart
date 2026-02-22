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
import img from "../../assets/Link → product-10-1.jpg.jpg";
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
  cartSecondCont,
} from "../../style/pages/cart/cart";

const Cart = () => {
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
            <CartHeader heading="Your Cart" total={5} />
            <DelProduct />
          </section>

          <section className={css({ hideBelow: "660px" })}>
            <DesktopCartList
              img={img}
              type="cart"
              name="Seeds of Change Organic Quinoa, Brown"
              price="$40"
            />
          </section>

          <section className={css({ hideFrom: "661px" })}>
            <MobileCartList
              img={img}
              type="cart"
              name="Seeds of ChangeOrganic Quinoa, Brown"
              price="$50"
            />
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
                <p>Continue Shopping</p>
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

        <section className={css(cartCheckoutMain)}>
          <div className={css(cartCheckoutCont)}>
            <div className={css(cartCheckoutTotal)}>
              <p>Subtotal</p>
              <p>$12.31</p>
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
              <p>$50</p>
            </div>
          </div>

          <button
            className={css(button.raw({ px: "lg", py: "sm" }), flex.raw(), {
              w: "100%",
              mt: ".5rem",
            })}
          >
            <p>Proceed To Checkout</p>
            <i>
              <FaArrowRightFromBracket />
            </i>
          </button>
        </section>
      </section>

      <Banner id={1} />
    </main>
  );
};

export default Cart;
