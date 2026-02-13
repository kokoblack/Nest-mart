import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import {
  productCardButton,
  productCardCat,
  productCardContainer,
  productCardCureentPrice,
  productCardImg,
  productCardName,
  productCardPriceCont,
  productCardSpecial,
} from "../../style/component/home/productCard";
import { flex } from "../../style/recipe/flex";
import { button } from "../../style/recipe/button";
import { Product } from "../../type/types";

const ProductCard = ({
  name,
  category,
  color,
  rating,
  type,
  initialPrice,
  currentPrice,
  brand,
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

      <p className={css(productCardCat)}>{category}</p>
      <p className={css(productCardName)}>{name}</p>
      <div
        className={css(flex.raw({ type: "startX", columnGap: "sm" }), {
          my: ".2rem",
        })}
      >
        <span
          className={css({ color: "yellow" }, flex.raw({ columnGap: "sm" }))}
        >
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <p>{rating}</p>
      </div>
      <p className={css({ fontFamily: "lato" })}>
        By{" "}
        <span className={css({ color: "primary.100", fontWeight: "bold" })}>
          {brand}
        </span>{" "}
      </p>

      <div className={css(flex.raw({ columnGap: "md" }), productCardPriceCont)}>
        <div className={css(flex.raw({columnGap: "sm", type: "startX"}),)}>
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

        <button
          className={css(
            button.raw({
              bg: "lightGreen",
              color: "green",
              px: "lg",
              py: "sm",
              font: "lato",
            }),
            productCardButton,
          )}
        >
          <span className={css({ fontSize: "1rem" })}>
            <IoCartOutline />
          </span>
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
