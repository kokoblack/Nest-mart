import { flex } from "../../style/recipe/flex";
import {
  container,
  icon,
  input,
  subscribeButton,
} from "../../style/component/global/subscribe";
import { css } from "../../../styled-system/css";
import { SiMinutemailer } from "react-icons/si";
import { button } from "../../style/recipe/button";
import {
  bannerBigText,
  bannerContainer,
  bannerDiscountContainer,
  bannerSmallText,
} from "../../style/component/global/banner";

type BannerProps = {
  id: number;
};

const Banner = ({ id }: BannerProps) => {
  return (
    <section className={css(bannerContainer)}>
      <div
        className={css(bannerDiscountContainer, {
          bgImage:
            id === 1 ? "url(assets/section4.png)" : "url(assets/section5.png)",
        })}
      >
        <h3 className={css(bannerBigText)}>
          Stay home & get your daily <br/>needs from our shop
        </h3>
        <p className={css(bannerSmallText)}>
          Start You'r Daily Shopping with <span className={css({color: 'primary.100'})}>Nest Mart</span>
        </p>

        <div
          className={css(
            flex.raw({ columnGap: "lg", type: "spaceBetween" }),
            container
          )}
        >
          <span className={icon}>
            <SiMinutemailer />
          </span>
          <input placeholder="Email address" className={input} />
          <button
            className={css(
              button.raw({ radius: "lg", py: "lg", px: "xl", fontSize: "lg" }),
              subscribeButton
            )}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
