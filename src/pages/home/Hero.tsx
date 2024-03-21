import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Subscribe from "../../components/global/Subscribe";
import { css } from "../../../styled-system/css";
import {
  HeroActive,
  HeroBigText,
  HeroContainer,
  HeroDiscountContainer,
  HeroIndicator,
  HeroIndicatorCont,
  HeroNavigation,
  HeroSmallText,
} from "../../style/pages/home/hero";
import { flex } from "../../style/recipe/flex";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);

  const animate = useRef<HTMLDivElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);
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

  const handleForwardClick = () => {
    setActive(1);
    animate.current.style.animation = "slideOut .5s ease-in alternate";
  };

  const handleBackWardClick = () => {
    setActive(0);
    animate.current.style.animation = "slideIn .5s ease-in alternate";
  };

  useEffect(() => {
    if (!focused) {
      var interval = setInterval(() => {
        if (active === 0) {
          handleForwardClick();
        } else {
          handleBackWardClick();
        }
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [active, focused]);

  return (
    <section className={css(HeroContainer)}>
      <div
        ref={animate}
        onAnimationEnd={() => (animate.current.style.animation = "none")}
        className={css(HeroDiscountContainer, {bgImage: active === 0? "url(assets/section0.png)" : "url(assets/section1.png)" })}
      >
        <h3 className={css(HeroBigText)}>
          {text[active]?.text} <br /> Big discount
        </h3>
        <p className={css(HeroSmallText)}>
          Save up to 50% off on your first order
        </p>

        <Subscribe ref={inputRef} setFocused={setFocused} />
      </div>

      <span
        onClick={handleBackWardClick}
        className={css(HeroNavigation, {
          left: [".5rem", ".5rem", ".5rem", ".5rem", "1rem"],
        })}
      >
        <MdKeyboardArrowLeft />
      </span>
      <span
        onClick={handleForwardClick}
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
