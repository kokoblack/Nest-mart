import { css } from "../../../styled-system/css";
import { featuredBigCardCont, featuredButton, featuredTitle } from "../../style/component/home/featuredBigCard";
import { button } from "../../style/recipe/button";

type FeaturedBigCardProps = {
  title: string;
  num: number;
};
const FeaturedBigCard = ({ title, num }: FeaturedBigCardProps) => {
  return (
    <div
      className={css(featuredBigCardCont, {
        bgImage:
          num === 1
            ? "url(assets/banner-1.png)"
            : num === 2
            ? "url(assets/banner-2.png)"
            : "url(assets/banner-3.png)",
      })}
    >
      <h3 className={css(featuredTitle)}>{title}</h3>
      <button className={css(button.raw({ py: "sm" }), featuredButton)}>Shop Now</button>
    </div>
  );
};

export default FeaturedBigCard;
