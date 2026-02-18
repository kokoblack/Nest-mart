import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import {
  productCardCureentPrice,
  productCardImg,
  productCardName,
  productCardSpecial,
} from "../../style/component/global/productCard";
import { flex } from "../../style/recipe/flex";
import { Product } from "../../type/types";
import { relProductCardContainer } from "../../style/component/global/relProductCard";

const RelProductCard = ({
  name,
  color,
  type,
  initialPrice,
  currentPrice,
  image,
}: Product) => {
  return (
    <div className={css(relProductCardContainer)}>
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

      <span className={css({ color: "yellow", my: ".6rem" }, flex.raw({ columnGap: "sm", type: "startX" }))}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>

      <div className={css(flex.raw({ columnGap: "sm", type: "startX" }), {fontWeight: "bold"})}>
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

export default RelProductCard;
