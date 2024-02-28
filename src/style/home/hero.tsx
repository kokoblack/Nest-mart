import { css } from "../../../styled-system/css";
import bgImage from "../../assets/section2.png";

export const HeroContainer = css.raw({
  // bgImage: 'url(../../assets/section2.png)',
  bgPosition: "center",
  bgSize: "cover",
  w: "100%",
  my: "2rem",
  rounded: "1rem",
  pl: "5rem",
  pt: "4rem",
  pb: "1rem",
  boxSizing: "border-box",
  // bg: "green",
  position: "relative",
});

export const HeroBigText = css.raw({
  fontSize: "4rem",
  color: "secondary.100",
  mb: "1.5rem",
  fontWeight: "1000",
  lineHeight: "4rem",
});

export const HeroSmallText = css.raw({
  fontSize: "1.5rem",
  color: "secondary.400",
  mb: "2rem",
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
  translateY: "50%"
});

export const HeroIndicatorCont = css.raw({
  mt: "4rem",
  mr: "5rem",

  '& div': {
    border: "1px solid #253D4E",
    rounded: "100%",
    w: '.5rem',
    h: '.5rem'
  }
});
