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
import { useState } from "react";

const ProductSelect = ({
  type,
  quantity,
  name,
}: {
  type: string;
  quantity?: number;
  name?: string;
}) => {
  const { increaseItem, decreaseItem, updateQuantity } = useCartStore();
  const [quanty, setQuanty] = useState(1);
  const quant = type === "cart" ? quantity!.toString() : quanty.toString()

  const handleIncreseQuanty = () => {
    if (quanty === 10) {
      setQuanty(10);
    } else {
      setQuanty((prevState) => prevState + 1);
    }
  };

  const handleDecreseQuanty = () => {
    if (quanty === 1) {
      setQuanty(1);
    } else {
      setQuanty((prevState) => prevState - 1);
    }
  };

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
            value = 10;
            e.target.value = "10";
            setQuanty(10);
          }

          if (Number(value) < 1) {
            value = 1;
            e.target.value = "";
            setQuanty(1);
          }

          if (type === "cart") {
            updateQuantity(name!, value);
          } else {
            setQuanty(Number(e.target.value));
          }
        }}
        onBlur={() => {
          updateQuantity(name!, quantity!);
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
        <i
          onClick={() => {
            if (type === "cart") {
              increaseItem(name!);
            } else {
              handleIncreseQuanty();
            }
          }}
        >
          <MdKeyboardArrowUp />
        </i>
        <i
          onClick={() => {
            if (type === "cart") {
              decreaseItem(name!);
            } else {
              handleDecreseQuanty();
            }
          }}
        >
          <MdKeyboardArrowDown />
        </i>
      </div>
    </div>
  );
};

export default ProductSelect;
