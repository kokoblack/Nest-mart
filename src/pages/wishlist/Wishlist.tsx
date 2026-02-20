import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { FaStar } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import img from "../../assets/Link → product-10-1.jpg.jpg";
import {
  wishlistCont,
  wishlistImg,
  wishlistInStock,
  wishlistMobileViewAction,
  wishlistMobileViewAPrice,
  wishlistMobileViewCont,
  wishlistMobileViewImgSec,
  wishlistMobileViewName,
  wishlistPrice,
  wishlistProductCont,
  wishlistTableCont,
  wishlistTableWrapper,
} from "../../style/pages/wishlist/wishlist";
import { button } from "../../style/recipe/button";
import Banner from "../../components/global/Banner";

const Wishlist = () => {
  return (
    <main>
      <div className={css(wishlistCont)}>
        <h3>Your Wishlist</h3>
        <p>
          There are <span>5</span> products in this list
        </p>

        <section className={css(wishlistTableWrapper)}>
          <table className={css(wishlistTableCont)}>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Action</th>
              <th>Remove</th>
            </tr>

            <tr>
              <td data-cell="name">
                <div
                  className={css(
                    flex.raw({ type: "startX" }),
                    wishlistProductCont,
                  )}
                >
                  <figure className={css(wishlistImg)}>
                    <img src={img} alt="image" />
                  </figure>
                  <div>
                    <p>dhfgghfg gdfgr grgege gegergrg wef</p>
                    <div
                      className={css(
                        flex.raw({ columnGap: "sm", type: "startX" }),
                        { fontSize: ".8rem" },
                      )}
                    >
                      <span
                        className={css(
                          { color: "yellow",  my: ".5rem" },
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
                </div>
              </td>
              <td data-cell="price" className={css(wishlistPrice)}>
                $2.51
              </td>
              <td data-cell="stock" className={css({ textAlign: "right" })}>
                <p className={css(wishlistInStock)}>In Stock</p>
              </td>
              <td data-cell="action">
                <button
                  className={css(button.raw({ px: "lg", py: "sm" }), {
                    fontWeight: "500",
                  })}
                >
                  Add to cart
                </button>
              </td>
              <td data-cell="remove">
                <i
                  className={css(flex.raw({ columnGap: "sm" }), {
                    color: "secondary.400",
                    cursor: "pointer",
                  })}
                >
                  <BiTrash />
                </i>
              </td>
            </tr>
          </table>
        </section>

        <section className={css(wishlistMobileViewCont)}>
          <section className={css(flex.raw({ columnGap: "xlg"}), wishlistMobileViewImgSec)}>
            <figure className={css(wishlistImg)}>
              <img src={img} alt="image" />
            </figure>

            <div>
              <h3 className={css(wishlistMobileViewName)}>Seeds of Change Organic Quinoa, Brown</h3>
              <div
                className={css(flex.raw({ columnGap: "sm", type: "startX" }), {
                  fontSize: ".7rem",
                })}
              >
                <span
                  className={css(
                    { color: "yellow", my: ".3rem" },
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
              <p className={css(wishlistMobileViewAPrice)}>$50</p>
            </div>
          </section>

          <section className={css(flex.raw({ columnGap: "xlg"}), wishlistMobileViewAction)}>
            <i>
              <BiTrash />
            </i>
            <button className={css(button.raw())}>Add to cart</button>
          </section>
        </section>
      </div>

      <Banner id={1} />
    </main>
  );
};

export default Wishlist;
