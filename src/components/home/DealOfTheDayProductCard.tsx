import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { FaStar } from "react-icons/fa";
import img from "../../assets/Article1.jpg";

const DealOfTheDayProductCard = () => {
  const cont = css.raw({
    w: "17rem",

    "@media screen and (max-width: 319px)": {
      w: "auto",

      '& > figure': {
        w: '8rem'
      }
    },
  });

  return (
    <div
      className={css(flex.raw({ type: "startY" }), cont)}
    >
      <figure className={css({ w: "7.5rem", mr: ".5rem" })}>
        <img src={img} alt="product" className={css({ rounded: "10px" })} />
      </figure>
      <div>
        <p
          className={css({
            fontSize: ".8rem",
            lineHeight: "1rem",
            color: "secondary.100",
            fontWeight: "bold",
          })}
        >
          Nestle Original Coffee-Mate Coffee Creamer
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
          <p>4.0</p>
        </div>

        <div
          className={css(flex.raw({ columnGap: "md", type: "startX" }), {
            fontWeight: "bold",
            mt: "1.2rem",
            lineHeight: 0,
          })}
        >
          <p className={css({ color: "primary.100", fontSize: ".9rem" })}>
            $15.85
          </p>
          <p
            className={css({
              color: "secondary.1300",
              textDecoration: "line-through",
              fontSize: ".8rem",
            })}
          >
            $16.8
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDayProductCard;
