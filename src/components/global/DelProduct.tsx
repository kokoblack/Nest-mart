import { BiTrash } from "react-icons/bi";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import { delProductCont } from "../../style/component/global/delProduct";
import { useCartStore } from "../../redux/CartReducer";

const DelProduct = ({type}: {type: string}) => {
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <div
      onClick={clearCart}
      className={css(flex.raw({ columnGap: "sm" }), delProductCont)}
    >
      <i>
        <BiTrash />
      </i>
      <p>Clear {type === "cart" ? "Cart" : "Items"}</p>
    </div>
  );
};

export default DelProduct;
