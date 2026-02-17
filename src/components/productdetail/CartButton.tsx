import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { css } from "../../../styled-system/css";
import { prodInfoSelectButton, prodInfoSelectCont, prodInfoSelectIcon } from "../../style/pages/productdetail/productInfo";
import { flex } from "../../style/recipe/flex";
import { button } from "../../style/recipe/button";
import { GrCart } from "react-icons/gr";


const CartButton = () => {
  return (
    <>
      <div
        className={css(
          flex.raw({ columnGap: "lg", type: "startX" }),
          prodInfoSelectCont,
        )}
      >
        <p className={css()}>1</p>
        <div className={css(prodInfoSelectIcon)}>
          <i>
            <MdKeyboardArrowUp />
          </i>
          <i>
            <MdKeyboardArrowDown />
          </i>
        </div>
      </div>

      <button className={css(button.raw({ fontSize: "md", py: "sm" }), prodInfoSelectButton)}>
        <i>
          <GrCart />
        </i>
        <p>Add to cart</p>
      </button>
    </>
  );
};

export default CartButton;
