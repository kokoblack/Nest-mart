import { css } from "../../../styled-system/css";
import {
  prodInfoSelectButton,
  prodInfoSelectCont,
  prodInfoSelectWishList,
} from "../../style/pages/productdetail/productInfo";
import { flex } from "../../style/recipe/flex";
import { button } from "../../style/recipe/button";
import { GrCart } from "react-icons/gr";
import { PiHeartStraight } from "react-icons/pi";
import ProductSelect from "../global/ProductSelect";

const CartButton = () => {
  return (
    <>
      <div
        className={css(
          flex.raw({ columnGap: "lg", type: "startX" }),
          prodInfoSelectCont,
        )}
      >
        <ProductSelect type="" />
      </div>

      <button
        className={css(
          button.raw({ fontSize: "md", py: "sm" }),
          prodInfoSelectButton,
        )}
      >
        <i>
          <GrCart />
        </i>
        <p>Add to cart</p>
      </button>

      <button className={css(prodInfoSelectWishList)}>
        <PiHeartStraight />
      </button>
    </>
  );
};

export default CartButton;
