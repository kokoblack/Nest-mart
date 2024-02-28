import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Subscribe from "../../components/Subscribe";
import { css } from "../../../styled-system/css";
import {
  HeroBigText,
  HeroContainer,
  HeroIndicatorCont,
  HeroNavigation,
  HeroSmallText,
} from "../../style/home/hero";
import herobgImg1 from '../../assets/section2.png'
import { flex } from "../../style/recipe/flex";

const Hero = () => {
  return (
    <section className={css(HeroContainer, {bgImage: 'url(assets/section2.png)'})}>
      <h3 className={css(HeroBigText)}>
        Fresh Vegetables <br /> Big discount
      </h3>
      <p className={css(HeroSmallText)}>
        Save up to 50% off on your first order
      </p>

      <Subscribe />

      <span className={css(HeroNavigation, {left: '1rem'})}>
        <MdKeyboardArrowLeft />
      </span>
      <span className={css(HeroNavigation, {right: '1rem'})}>
        <MdKeyboardArrowRight />
      </span>

      <div className={css(HeroIndicatorCont, flex.raw({columnGap: 'md'}))}>
        <div ></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
