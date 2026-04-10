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
import { useCartStore } from "../../redux/CartReducer";

const ProductSelect = ({
  type,
  quantity,
  name,
}: {
  type: string;
  quantity: number;
  name: string;
}) => {
  const { increaseItem, decreaseItem, updateQuantity } = useCartStore();
  const quant = String(quantity);
  return (
    <div
      className={css(
        productSelectCont,
        flex.raw({ columnGap: "sm", type: "startX" }),
      )}
    >
      <input
        onChange={(e) => {
          let value = Number(e.target.value);

          if (Number(value) > 10) {
            value = 10
            e.target.value = "10";
          } 

          if (Number(value) < 1) {
            value = 1
            e.target.value = "";
          } 

          updateQuantity(name, value);
        }}
        onBlur={() => {

          updateQuantity(name, quantity);
        }}
        className={css(
          type === "cart" ? productSelectInputCart : productSelectInput,
        )}
        type="number"
        max={10}
        min={1}
        inputMode="numeric"
        name="select"
        placeholder={quant}
      />
      <div
        className={css(
          type === "cart" ? productSelectIconCart : productSelectIcon,
        )}
      >
        <i onClick={() => increaseItem(name)}>
          <MdKeyboardArrowUp />
        </i>
        <i onClick={() => decreaseItem(name)}>
          <MdKeyboardArrowDown />
        </i>
      </div>
    </div>
  );
};

export default ProductSelect;
