import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { button } from "../../style/recipe/button";
import { Product } from "../../type/types";
import {
  dailyBestSellsCardContainer,
  dailyBestSellsCardImg,
  dailyBestSellsCardRange,
  dailyBestSellsCardSpecial,
} from "../../style/component/home/dailyBestSellsCard";

const DailyBestSellsCard = ({
  name,
  category,
  color,
  rating,
  type,
  initialPrice,
  currentPrice,
  image,
}: Product) => {
  return (
    <div className={css(dailyBestSellsCardContainer)}>
      {type && (
        <div
          style={{ backgroundColor: color }}
          className={css(dailyBestSellsCardSpecial)}
        >
          <p>{type}</p>
        </div>
      )}

      <figure className={css(dailyBestSellsCardImg)}>
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

      <div
        className={css(flex.raw({ columnGap: "md", type: "startX" }), {
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
      </div>

      <input type="range" className={[css(dailyBestSellsCardRange), 'range'].join(" ")}/>

      <p
        className={css({
          color: "secondary.100",
          fontFamily: "lato",
          fontSize: ".8rem",
          fontWeight: '700',
        })}
      >
        Sold: 90/120
      </p>

      <button
        className={css(
          button.raw({
            bg: "green",
            color: "white",
            py: "lg",
            fontSize: "md",
            move: "center",
          }),
          {
            lineHeight: ".5rem",
            w: "100%",
            px: 0,
            fontWeight: "bold",
            mt: "1rem",
          }
        )}
      >
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default DailyBestSellsCard;
