import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import {
  productCardContainer,
  productCardCureentPrice,
  productCardImg,
  productCardName,
  productCardSpecial,
} from "../../style/component/global/productCard";
import { flex } from "../../style/recipe/flex";
import { Product } from "../../type/types";

const ProductCard = ({
  name,
  color,
  type,
  initialPrice,
  currentPrice,
  image,
}: Product) => {
  return (
    <div className={css(productCardContainer)}>
      {type && (
        <div
          style={{ backgroundColor: color }}
          className={css(productCardSpecial)}
        >
          <p>{type}</p>
        </div>
      )}

      <figure className={css(productCardImg)}>
        <img src={image} alt="product" />
      </figure>

      <p className={css(productCardName)}>{name}</p>

      <span className={css({ color: "yellow" }, flex.raw({ columnGap: "sm" }))}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>

      <div className={css(flex.raw({ columnGap: "sm", type: "startX" }))}>
        <p className={css(productCardCureentPrice)}>{currentPrice}</p>
        <p
          className={css({
            color: "secondary.1300",
            textDecoration: "line-through",
          })}
        >
          {initialPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
