import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import {
  wishlistImg,
  wishlistMobileViewAction,
  wishlistMobileViewActionBut,
  wishlistMobileViewActionSelect,
  wishlistMobileViewAPrice,
  wishlistMobileViewCont,
  wishlistMobileViewImgSec,
  wishlistMobileViewName,
} from "../../style/pages/wishlist/wishlist";
import { flex } from "../../style/recipe/flex";
import { BiTrash } from "react-icons/bi";
import { button } from "../../style/recipe/button";
import ProductSelect from "./ProductSelect";

type MobileCartList = {
  img: string;
  name: string;
  price: string;
  type: string;
};

const MobileCartList = ({ img, name, price, type }: MobileCartList) => {
  return (
    <section className={css(wishlistMobileViewCont)}>
      <section
        className={css(
          flex.raw({ columnGap: "xlg" }),
          wishlistMobileViewImgSec,
        )}
      >
        <figure className={css(wishlistImg)}>
          <img src={img} alt="image" />
        </figure>

        <div>
          <h3 className={css(wishlistMobileViewName)}>{name}</h3>
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
          <p className={css(wishlistMobileViewAPrice)}>{price}</p>
        </div>
      </section>

      <section
        className={css(
          flex.raw({ columnGap: "xlg" }),
          wishlistMobileViewAction,
        )}
      >
        <i>
          <BiTrash />
        </i>
        {type === "cart" && <div className={css(wishlistMobileViewActionSelect)}><ProductSelect type=""/></div>}
        {type === "wishlist" && (
          <button className={css(button.raw(), wishlistMobileViewActionBut)}>
            Add to cart
          </button>
        )}
      </section>
    </section>
  );
};

export default MobileCartList;
