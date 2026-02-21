import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import {
  productSelectCont,
  productSelectIcon,
  productSelectIconCart,
  productSelectInput,
  productSelectInputCart,
} from "../../style/component/global/productSelect";

const ProductSelect = ({ type }: { type: string }) => {
  return (
    <div
      className={css(
        productSelectCont,
        flex.raw({ columnGap: "sm", type: "startX" }),
      )}
    >
      <input
        className={css(
          type === "cart" ? productSelectInputCart : productSelectInput,
        )}
        type="text"
        name="select"
        placeholder="1"
      />
      <div
        className={css(
          type === "cart" ? productSelectIconCart : productSelectIcon,
        )}
      >
        <i>
          <MdKeyboardArrowUp />
        </i>
        <i>
          <MdKeyboardArrowDown />
        </i>
      </div>
    </div>
  );
};

export default ProductSelect;
