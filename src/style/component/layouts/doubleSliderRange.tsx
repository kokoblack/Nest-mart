import { css } from "../../../../styled-system/css";

export const doubleSliderCont = css.raw({
    position: "relative",
    mt: ".7rem"

})

export const doubleSliderTracker = css.raw({
  width: "100%",
  height: "5px",
  position: " absolute",
  margin: "auto",
  top: "0",
  bottom: "0",
  rounded: "5px",
});

export const doubleSliderInput = css.raw({
  appearance: "none",
  width: "100%",
  outline: "none",
  position: "absolute",
  margin: "auto",
  top: "0",
  bottom: "0",
  backgroundColor: "transparent",
  pointerEvents: "none",
  "&::-webkit-slider-runnable-track": {
    WebkitAppearance: "none",
    h: "5px",
  },

  "&::-moz-range-track": {
    WebkitAppearance: "none",
    h: "5px",
  },

  "&::-ms-track": {
    WebkitAppearance: "none",
    h: "5px",
  },

  "&::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    h: "1rem",
    w: "1rem",
    bgColor: "primary.100",
    cursor: "pointer",
    mt: "-6px",
    pointerEvents: "auto",
    rounded: "50%",
  },
  "&::-moz-range-thumb": {
    WebkitAppearance: "none",
    h: "1.7rem",
    w: "1.7rem",
    bgColor: "primary.100",
    cursor: "pointer",
    mt: "-9px",
    pointerEvents: "auto",
    rounded: "50%",
  },
  "&::-ms-thumb": {
    WebkitAppearance: "none",
    h: "1.7rem",
    w: "1.7rem",
    bgColor: "primary.100",
    cursor: "pointer",
    mt: "-9px",
    pointerEvents: "auto",
    rounded: "50%",
  },
});

export const doubleSliderSecondSection = css.raw({
    fontSize: ".875rem",
    color: "secondary.400",
    fontWeight: "500",
    mt: "2rem",

    "& > p > span": {
        color: "primary.100"
    }
})