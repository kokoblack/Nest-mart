import { css } from "../../../../styled-system/css";

export const filterSliderTracker = css.raw({
  width: "100%",
  height: "5px",
  position: " absolute",
  margin: "auto",
  top: "0",
  bottom: "0",
  rounded: "5px",
});

export const filterHighlightedRange = css.raw({
  position: "absolute",
  color: "primary.400",
  h: "4px",
  rounded: "2px",
  bottom: "50px"
});

export const filterInput = css.raw({
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
    h: "1.7rem",
    w: "1.7rem",
    bgColor: "primary.100",
    cursor: "pointer",
    mt: "-9px",
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
