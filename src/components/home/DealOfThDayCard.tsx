import React from "react";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import { FaStar } from "react-icons/fa";
import { button } from "../../style/recipe/button";
import { IoCartOutline } from "react-icons/io5";
import {
  dealOfTheDayCardCont,
  dealOfTheDayCardFirstSection,
  dealOfTheDayCardSecondSection,
} from "../../style/component/home/dealOfTheDayCard";
import { DOTDProduct } from "../../type/types";

const DealOfThDayCard = ({
  name,
  rating,
  currentPrice,
  initialPrice,
  brand,
  id,
}: DOTDProduct) => {
  return (
    <div
      className={css(dealOfTheDayCardCont, {
        bgImage:
          id === 1
            ? "url(assets/banner-5.png)"
            : id === 2
            ? "url(assets/banner-6.png)"
            : id === 3
            ? "url(assets/banner-7.png)"
            : "url(assets/banner-8.png)",
      })}
    >
      <section
        className={css(
          flex.raw({ columnGap: "md" }),
          dealOfTheDayCardFirstSection
        )}
      >
        <div>
          <p>567</p>
          <p>Days</p>
        </div>

        <div>
          <p>08</p>
          <p>Hours</p>
        </div>

        <div>
          <p>17</p>
          <p>Mins</p>
        </div>

        <div>
          <p>59</p>
          <p>Sec</p>
        </div>
      </section>

      <section className={css(dealOfTheDayCardSecondSection)}>
        <p
          className={css({
            fontSize: ".8rem",
            lineHeight: "1rem",
            color: "secondary.100",
            fontWeight: "bold",
          })}
        >
          {name}
        </p>
        <div
          className={css(flex.raw({ type: "startX", columnGap: "sm" }), {
            my: ".3rem",
            fontSize: ".8rem",
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
        <p className={css({ fontFamily: "lato", fontSize: ".8rem" })}>
          By <span className={css({ color: "primary.100", fontWeight: "bold" })}>{brand}</span>
        </p>

        <div
          className={css(flex.raw({ columnGap: "md" }), {
            fontWeight: "bold",
            mt: ".8rem",
            lineHeight: 0,
          })}
        >
          <p className={css({ color: "primary.100", fontSize: ".9rem" })}>
            {currentPrice}
          </p>
          <p
            className={css({
              color: "secondary.1300",
              textDecoration: "line-through",
              fontSize: ".8rem",
            })}
          >
            {initialPrice}
          </p>
          <button
            className={css(
              button.raw({
                bg: "lightGreen",
                color: "green",
                px: "md",
                py: "sm",
                fontSize: "md",
                font: "lato",
              }),
              { ml: "auto", lineHeight: ".5rem" }
            )}
          >
            <span className={css({ fontSize: "1rem" })}>
              <IoCartOutline />
            </span>
            <p>Add</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default DealOfThDayCard;
