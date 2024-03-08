import { css } from "../../../styled-system/css";

type FeaturedSmallCardsProps = {
  img: string;
  name: string;
  qty: string;
  bg: string;
};

const FeaturedSmallCards = ({
  img,
  name,
  qty,
  bg,
}: FeaturedSmallCardsProps) => {
  return (
    <div
      className={css({
        rounded: "10px",
        p: [".7rem", ".7rem", "1rem"],
        textAlign: "center",
        w: "fit-content",
        bg: bg,
      })}
      style={{backgroundColor: bg}}
    >
      <img
        src={img}
        alt="vegetables"
        className={css({ w: ["4rem", "4rem", "5rem"], h: "auto", mx: "auto", mb: ".5rem" })}
      />
      <p
        className={css({
          fontSize: [".85rem", ".85rem", "1rem"],
          color: "secondary.100",
          fontWeight: "bold",
        })}
      >
        {name}
      </p>
      <p
        className={css({
          fontSize: [".65rem", ".65rem", ".8rem"],
          fontFamily: "lato",
          color: "secondary.700",
        })}
      >
        {qty}
      </p>
    </div>
  );
};

export default FeaturedSmallCards;
