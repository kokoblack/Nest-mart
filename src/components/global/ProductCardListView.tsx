import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import {
  productCardListViewCat,
  productCardListViewCont,
  productCardListViewCurentPrice,
  productCardListViewDesc,
  productCardListViewImg,
  productCardListViewImgSection,
  productCardListViewInitButtonCont,
  productCardListViewInitButtonIcon,
  productCardListViewInitButtonText,
  productCardListViewInitPrice,
  productCardListViewName,
  productCardListViewPriceCont,
  productCardListViewRating,
  productCardListViewType,
} from "../../style/component/global/productCardListView";
import { GrCart } from "react-icons/gr";
import { button } from "../../style/recipe/button";
import { Product } from "../../type/types";

const ProductCardListView = ({
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
    <div className={css(productCardListViewCont)}>
      <section className={css(productCardListViewImgSection)}>
        <p
          style={{ backgroundColor: color }}
          className={css(productCardListViewType)}
        >
          {type}
        </p>
        <figure className={css(productCardListViewImg)}>
          <img src={image} alt="img" />
        </figure>
      </section>

      <section className={css()}>
        <p className={css(productCardListViewCat)}>{category}</p>
        <h3 className={css(productCardListViewName)}>{name}</h3>

        <div
          className={css(
            flex.raw({ columnGap: "sm", type: "startX" }),
            productCardListViewRating,
          )}
        >
          <span
            className={css({ color: "yellow" }, flex.raw({ columnGap: "sm" }))}
          >
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
          </span>
          <p>{rating}</p>
        </div>

        <p className={css(productCardListViewDesc)}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam beatae
          consectetur, atque inventore aliquam adipisci perspiciatis nostrum qui
          consequatur praesentium?
        </p>

        <div className={css(productCardListViewPriceCont)}>
          <p className={css(productCardListViewCurentPrice)}>{currentPrice}</p>
          <p className={css(productCardListViewInitPrice)}>{initialPrice}</p>
        </div>

        <button
          className={css(
            button.raw({
              bg: "green",
              color: "white",
              px: "xl",
              py: "sm",
              font: "lato",
            }),
            productCardListViewInitButtonCont,
          )}
        >
          <i className={css(productCardListViewInitButtonIcon)}>
            <GrCart />
          </i>
          <p className={css(productCardListViewInitButtonText)}>Add to Cart</p>
        </button>
      </section>
    </div>
  );
};

export default ProductCardListView;
