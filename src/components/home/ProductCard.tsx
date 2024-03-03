import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import {
  productCardContainer,
  productCardImg,
  productCardSpecial,
} from "../../style/component/home/productCard";
import { flex } from "../../style/recipe/flex";
import { button } from "../../style/recipe/button";
import { ProductCardProps } from "../../type/types";

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
}: ProductCardProps) => {
  return (
    <div className={css(productCardContainer)}>
      {type && (
        <div style={{backgroundColor: color}} className={css(productCardSpecial)}>
          <p>{type}</p>
        </div>
      )}

      <figure className={css(productCardImg)}>
        <img src={image} alt="product" />
      </figure>

      <p
        className={css({
          fontSize: ".7rem",
          color: "secondary.1300",
          mb: ".5rem",
          fontFamily: "lato",
        })}
      >
        {category}
      </p>
      <p
        className={css({
          fontSize: ".95rem",
          lineHeight: "1rem",
          color: "secondary.100",
          fontWeight: "bold",
        })}
      >
        {name}
      </p>
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

      <div
        className={css(flex.raw({ columnGap: "md" }), {
          fontWeight: "bold",
          mt: ".8rem",
        })}
      >
        <p className={css({ color: "primary.100", fontSize: "1.05rem" })}>
          {currentPrice}
        </p>
        <p
          className={css({
            color: "secondary.1300",
            textDecoration: "line-through",
          })}
        >
          {initialPrice}
        </p>
        <button
          className={css(
            button.raw({
              bg: "lightGreen",
              color: "green",
              px: "lg",
              py: "sm",
              fontSize: "md",
              font: "lato",
            }),
            { ml: "auto", lineHeight: ".5rem" }
          )}
        >
          <span className={css({ fontSize: "1.2rem" })}>
            <IoCartOutline />
          </span>
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
