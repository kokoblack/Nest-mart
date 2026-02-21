import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";

type productCard = {
  img: string;
  name: string;
  price: string;
};

const ProductsCard = ({ img, name, price }: productCard) => {
  return (
    <section className={css(flex.raw({ columnGap: "lg", type: "startX" }))}>
      <figure className={css({ w: "5rem", h: "5rem" })}>
        <img src={img} alt="img" />
      </figure>
      <div>
        <p
          className={css({
            fontSize: "1rem",
            color: "primary.100",
            mb: ".2rem",
            fontWeight: "700",
          })}
        >
          {name}
        </p>
        <p
          className={css({
            fontSize: "1rem",
            color: "secondary.400",
            mb: ".1rem",
            fontWeight: "500",
          })}
        >
          {price}
        </p>
        <span className={css({ fontSize: ".8rem", color: "yellow" })}>
          <FaStar />
        </span>
      </div>
    </section>
  );
};

export default ProductsCard;
