import { css } from "../../../../styled-system/css";

export const productSelectCont = css.raw({
  border: "2px solid #3BB77E",
  rounded: "5px",
  pr: ".4rem",
  pl: ".6rem",
  py: ".1rem",
  bg: "white",

  "@media screen and (max-width: 990px)": {
    fontSize: ".85rem",
    py: ".15rem",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: ".97rem",
    pr: ".5rem",
    pl: "1rem",
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".86rem",
    pl: ".8rem",
  },
});

export const productSelectInput = css.raw({
  w: "25px",
  appearance: "textfield",

  "&::-webkit-outer-spin-button": {
    appearance: "none",
    margin: 0,
  },
  "&::-webkit-inner-spin-button": {
    appearance: "none",
    margin: 0,
  },

  "@media screen and (max-width: 480px)": {
    w: "20px",
  },

  _placeholder: {
    color: "black",

    "@media screen and (max-width: 990px)": {
      fontSize: ".8rem",
    },

    "@media screen and (max-width: 480px)": {
      fontSize: "1rem",
    },

    "@media screen and (max-width: 320px)": {
      fontSize: ".8rem",
    },
  },

  _focus: {
    outline: "none",

    _placeholder: {
      color: "transparent",
    },
  },
});

export const productSelectInputCart = css.raw({
  w: "20px",
  fontSize: ".8rem",
  appearance: "textfield",

  "&::-webkit-outer-spin-button": {
    appearance: "none",
    margin: 0,
  },
  "&::-webkit-inner-spin-button": {
    appearance: "none",
    margin: 0,
  },

  _placeholder: {
    color: "black",
    fontSize: ".8rem",
  },

  _focus: {
    outline: "none",

    _placeholder: {
      color: "transparent",
    },
  },
});

export const productSelectIcon = css.raw({
  color: "primary.100",
  cursor: "pointer",
});

export const productSelectIconCart = css.raw({
  color: "primary.100",
  cursor: "pointer",
  fontSize: ".8rem",
});
