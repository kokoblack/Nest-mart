import { css } from "../../../styled-system/css";

export const HeroContainer = css.raw({
  w: "100%",
  mt: ["1rem", "1rem", "1rem", "2rem"],
  mb: "3rem",
  rounded: "1.2rem",
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden",
});

export const HeroDiscountContainer = css.raw({
  bgPosition: "center",
  bgSize: "cover",
  w: "100%",
  pl: ["1rem", "1rem", "2rem", "3rem", "5rem"],
  pt: ["1rem", "1rem", "2rem", "4rem"],
  pb: ["3rem", "3rem", "3rem", "6rem"],
  rounded: "1.2rem",
});

export const HeroBigText = css.raw({
  fontSize: ["1.9rem", "1.9rem", "2.8rem", "4rem"],
  color: "secondary.100",
  mb: [".7rem", ".7rem", ".8rem", "1.5rem"],
  fontWeight: "1000",
  lineHeight: ["1.9rem", "1.9rem", "3rem", "4rem"],
});

export const HeroSmallText = css.raw({
  fontSize: [".7rem", ".7rem", "1.1rem", "1.5rem"],
  color: "secondary.400",
  mb: [".9rem", ".9rem", "1rem", "2rem"],
  fontWeight: "500",
});

export const HeroNavigation = css.raw({
  p: ".4rem",
  fontSize: "1.2rem",
  rounded: "100%",
  position: "absolute",
  bg: "secondary.900",
  color: "secondary.400",
  zIndex: "3",
  top: "50%",
  translateY: "50%",
  cursor: "pointer",
  transition: "all 2s ease-in ",
  animation: "bounce 2s ease-in infinite alternate",

  "@media screen and (max-width: 767px)": {
    display: "none",
  },
});

export const HeroIndicatorCont = css.raw({
  position: "absolute",
  top: ["90%", "90%", "95%"],
  left: "50%",
  translateX: "50%",
});

export const HeroIndicator = css.raw({
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "secondary.100",
  rounded: "100%",
  w: ".4rem",
  h: ".4rem",
});

export const HeroActive = css.raw({
  bg: "primary.100",
  borderColor: "primary.100",
});
