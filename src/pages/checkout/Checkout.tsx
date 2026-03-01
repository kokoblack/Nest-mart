import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import CartHeader from "../../components/global/CartHeader";
import { flex } from "../../style/recipe/flex";
import img from "../../assets/Link → product-3-1.jpg.jpg";
import { LuUser } from "react-icons/lu";
import { CiShoppingTag } from "react-icons/ci";
import {
  checkoutBillingCont,
  checkoutCont,
  checkoutCouponCont,
  checkoutFirstCont,
  checkoutFormCont,
  checkoutLogintag,
  checkoutMainCont,
  checkoutOrderCont,
  checkoutOrderDetailCont,
  checkoutOrderImg,
  checkoutOrderName,
  checkoutOrderprice,
  checkoutPaymentCont,
  checkoutPaymentForm,
  checkoutPaymentIcon,
  checkoutSecondCont,
} from "../../style/pages/checkout/checkout";
import { button } from "../../style/recipe/button";
import { FaCcPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Banner from "../../components/global/Banner";

const Checkout = () => {
  return (
    <main>
      <div className={css(checkoutMainCont)}>
        <CartHeader heading="Checkout" total={5} />

        <div className={css(flex.raw({ type: "startY"}), checkoutCont)}>
          <section className={css(checkoutFirstCont)}>
            <section
              className={css(flex.raw({ columnGap: "lg", type: "startX" }))}
            >
              <div
                className={css(checkoutLogintag, flex.raw({ columnGap: "md" }))}
              >
                <i>
                  <LuUser />
                </i>
                <p>
                  Already have an account? <span>Click here to login</span>
                </p>
              </div>

              <div className={css(checkoutCouponCont, flex.raw())}>
                <div className={css(flex.raw({ columnGap: "md" }))}>
                  <i>
                    <CiShoppingTag />
                  </i>
                  <input type="text" placeholder="Enter Coupon Code..." />
                </div>

                <button className={css(button.raw({ bg: "darkBlue" }))}>
                  Apply Coupon
                </button>
              </div>
            </section>

            <section className={css(checkoutBillingCont)}>
              <h3>Billing Details</h3>
              <form className={css(checkoutFormCont)}>
                <div className={css()}>
                  <input required placeholder="First name *" />
                  <input required placeholder="Last name *" />
                </div>

                <div className={css()}>
                  <input required placeholder="Address *" />
                  <input placeholder="Address line2" />
                </div>

                <div className={css()}>
                  <input required placeholder="City / Town *" />
                  <input required placeholder="Postal code / ZIP *" />
                </div>

                <div className={css()}>
                  <input required placeholder="Phone *" />
                  <input required placeholder="Email Address *" />
                </div>
              </form>
            </section>
          </section>

          <section className={css(checkoutSecondCont)}>
            <section className={css(checkoutOrderCont)}>
              <div className={css(flex.raw({ columnGap: "sm" }))}>
                <h3>Your order</h3>
                <p>Subtotal</p>
              </div>

              <hr />
              <section
                className={css(
                  flex.raw({ columnGap: "xlg" }),
                  checkoutOrderDetailCont,
                )}
              >
                <figure className={css(checkoutOrderImg)}>
                  <img src={img} alt="image" />
                </figure>

                  <div className={css({ w: "10rem" })}>
                    <h3 className={css(checkoutOrderName)}>
                      Seeds of Change Organic Quinoa, Brown
                    </h3>
                    <div
                      className={css(
                        flex.raw({ columnGap: "sm", type: "startX" }),
                        { my: ".3rem" },
                      )}
                    >
                      <span
                        className={css(
                          { color: "orange" },
                          flex.raw({ columnGap: "sm" }),
                        )}
                      >
                        <i>
                          <FaStar />
                        </i>
                        <i>
                          <FaStar />
                        </i>
                        <i>
                          <FaStar />
                        </i>
                        <i>
                          <FaStar />
                        </i>
                        <i>
                          <FaStar />
                        </i>
                      </span>
                      <p className={css({ color: "secondary.700" })}>4.0</p>
                    </div>
                  </div>

                  <p>x2</p>
                  <p className={css(checkoutOrderprice)}>$50</p>
              </section>
            </section>

            <section className={css(checkoutPaymentCont)}>
              <h3>Payment</h3>
              <form className={css(checkoutPaymentForm)}>
                <div>
                  <input type="radio" id="bank" name="bank" />
                  <label>Direct Bank Transfer</label>
                </div>

                <div>
                  <input type="radio" id="cash" name="cash" />
                  <label>Cash on delivery</label>
                </div>

                <div>
                  <input type="radio" id="online" name="online" />
                  <label>Online Getway</label>
                </div>
              </form>

              <div
                className={css(
                  checkoutPaymentIcon,
                  flex.raw({ columnGap: "md", type: "startX" }),
                )}
              >
                <i>
                  <FaCcPaypal />
                </i>
                <i>
                  <FaCcMastercard />
                </i>
                <i>
                  <RiVisaLine />
                </i>
              </div>

              <button className={css(button.raw({ px: "xl", py: "sm", fontSize: "md" }))}>
                <p>Place an Order</p>
                <i>
                  <FaArrowRightFromBracket />
                </i>
              </button>
            </section>
          </section>
        </div>
      </div>
      <Banner id={1}/>
    </main>
  );
};

export default Checkout;
