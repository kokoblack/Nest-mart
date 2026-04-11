import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { button } from "../../style/recipe/button";
import { Product } from "../../type/types";
import {
  dailyBestSellsCardContainer,
  dailyBestSellsCardImg,
  dailyBestSellsCardName,
  dailyBestSellsCardRange,
  dailyBestSellsCardSpecial,
} from "../../style/component/home/dailyBestSellCards";
import { useCartStore } from "../../redux/CartReducer";
import { useNavigate } from "react-router-dom";
import { useProductDetailStore } from "../../redux/ProductDetailsReducer";

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
  const addItem = useCartStore((state) => state.addItem);
  const updateProductDetail = useProductDetailStore(
    (state) => state.updateProductDetail,
  );

  let navigate = useNavigate();

  const productDetail = {
    name,
    img: image,
    initPrice: parseFloat(initialPrice),
    curtPrice: parseFloat(currentPrice),
  };

  const item = {
    name,
    img: image,
    price: parseFloat(currentPrice),
  };

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

      <div
        onClick={() => {
          updateProductDetail({ ...productDetail });
          navigate("/productDetail");
        }}
      >
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
        <p className={css(dailyBestSellsCardName)}>{name}</p>
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
            mt: "1rem",
            mb: "1rem",
            lineHeight: 0,
          })}
        >
          <p className={css({ color: "primary.100", fontSize: ".95rem" })}>
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

        <input
          type="range"
          className={[css(dailyBestSellsCardRange), "range"].join(" ")}
        />

        <p
          className={css({
            color: "secondary.100",
            fontFamily: "lato",
            fontSize: ".9rem",
            fontWeight: "700",
          })}
        >
          Sold: 90/120
        </p>
      </div>

      <button
        onClick={() => addItem({ ...item })}
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
          },
        )}
      >
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default DailyBestSellsCard;
