import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Subscribe from "../../components/Subscribe";
import { css } from "../../../styled-system/css";
import {
  HeroActive,
  HeroBigText,
  HeroContainer,
  HeroIndicator,
  HeroIndicatorCont,
  HeroNavigation,
  HeroSmallText,
} from "../../style/home/hero";
import { flex } from "../../style/recipe/flex";
import { useEffect, useState } from "react";

const Hero = () => {
  const [active, setActive] = useState(0);

  const text = [
    {
      text: "Fresh Vegetable",
      url: "url(assets/section0.png)",
    },
    {
      text: "Pure Coffe",
      url: "url(assets/section1.png)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (active === 0) {
        setActive(1)
      }else {
        setActive(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [active]);

  return (
    <section className={css(HeroContainer, { bgImage: text[active].url })}>
      <h3 className={css(HeroBigText)}>
        {text[active].text} <br /> Big discount
      </h3>
      <p className={css(HeroSmallText)}>
        Save up to 50% off on your first order
      </p>

      <Subscribe />

      <span
        onClick={() => setActive(0)}
        className={css(HeroNavigation, {
          left: [".5rem", ".5rem", ".5rem", ".5rem", "1rem"],
        })}
      >
        <MdKeyboardArrowLeft />
      </span>
      <span
        onClick={() => setActive(1)}
        className={css(HeroNavigation, {
          right: [".5rem", ".5rem", ".5rem", ".5rem", "1rem"],
        })}
      >
        <MdKeyboardArrowRight />
      </span>

      <div className={css(HeroIndicatorCont, flex.raw({ columnGap: "xsm" }))}>
        <div
          className={css(HeroIndicator, active === 0 ? HeroActive : null)}
        ></div>
        <div
          className={css(HeroIndicator, active === 1 ? HeroActive : null)}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
