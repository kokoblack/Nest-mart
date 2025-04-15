import { css } from "../../../../styled-system/css";

export const dailyBestSellsCardContainer = css.raw({
  w: ["13rem"],
  p: [".8rem"],
  rounded: "15px",
  bg: "secondary.500",
  border: "1px solid #ECECEC",
  fontSize: ".75rem",
  color: "secondary.700",
  position: "relative",
});

export const dailyBestSellsCardImg = css.raw({
  w: "10rem",
  mx: "auto",
});

export const dailyBestSellsCardSpecial = css.raw({
  position: "absolute",
  top: "0",
  left: "0",
  borderTopLeftRadius: ".9rem",
  borderBottomRightRadius: ".9rem",
  fontSize: ".6rem",
  px: "1rem",
  py: ".4rem",
  color: "secondary.500",
  fontFamily: "lato",
});

export const dailyBestSellsCardRange = css.raw({
  WebkitAppearance: "none",
  appearance: "none",
  background: "transparent",
  cursor: "pointer",
  width: "100%",
  color: "primary.100",
  mb: '.5rem',
  mt: '1rem',

  "&::-webkit-slider-runnable-track": {
    h: ".4rem",
    rounded: "5rem",
  },

  "&::-moz-range-track": {
    h: ".4rem",
    rounded: "5rem",
  },

  "&::-webkit-slider-thumb": {
    display: "none",
  },

  "&::-moz-range-thumb": {
    display: "none",
  },
});
