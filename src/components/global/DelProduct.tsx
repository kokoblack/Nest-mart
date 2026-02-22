import { BiTrash } from "react-icons/bi";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import { delProductCont } from "../../style/component/global/delProduct";

const DelProduct = () => {
  return (
    <div
      className={css(flex.raw({ columnGap: "sm" }), delProductCont)}
    >
      <i>
        <BiTrash />
      </i>
      <p>Clear Cart</p>
    </div>
  );
};

export default DelProduct;
