import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { FaStar } from "react-icons/fa";
import { DOTDProduct } from "../../type/types";

const DealOfTheDayProductCard = ({name, rating, currentPrice, initialPrice, image}:DOTDProduct) => {
  const cont = css.raw({
    w: "18rem",

    "@media screen and (max-width: 319px)": {
      w: "auto",

      "& > figure": {
        w: "40%",
      },

      '& > div': {
        w: '60%'
      }
    },
  });

  return (
    <div className={css(flex.raw({}), cont)}>
      <figure className={css({ w: "30%", h: 'auto', mr: ".5rem" })}>
        <img src={image} alt="product" className={css({ rounded: "10px" })} />
      </figure>
      <div className={css({w: '70%'})}>
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
            my: ".1rem",
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

        <div
          className={css(flex.raw({ columnGap: "md", type: "startX" }), {
            fontWeight: "bold",
            mt: ".5rem",
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
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDayProductCard;
