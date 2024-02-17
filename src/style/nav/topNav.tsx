import { css } from "../../../styled-system/css";

export const navContainer = css({
  display: "flex",
  justifyContent: [
    "space-between",
    "space-between",
    "space-between",
    "space-between",
    "center",
  ],
  alignContent: "center",
  py: ["1rem", "1rem", "1rem", "1.5rem"],
  px: ["1rem", "1rem", "1rem", "3rem"],
  columnGap: "2%",
  w: "100%",
  position: 'relative',
  borderBottom: '1px solid #dedfe2'
});

export const hr = css({
  rotate: "180dg",
  color: "#7E7E7E",
  borderWidth: ".5px",
  height: "1.3rem",
});

export const navMenuIcon = css.raw({
  fontSize: "1.5rem",
  alignSelf: "center",

  hideFrom: "767px",
});

export const navImage = css({
  w: ["1rem", "8rem", "8rem", "auto"],
  h: ["1rem", "2.5rem", "2.5rem", "auto"],
});

export const navSearchContainer = css.raw({
  py: ".8rem",
  px: "1rem",
  border: "2px solid #BCE3C9",
  w: [undefined, undefined, "50%", "50%", "35%"],
  borderRadius: "4px",
  alignSelf: "center",

  hideBelow: "md",
});

export const navInput = css({
  w: "40%",
  fontSize: ".8rem",
  fontFamily: "lato",

  _placeholder: {
    color: "secondary.600",
    fontSize: ".8rem",
    fontFamily: "lato",
  },

  _focus: {
    border: "none",
    outline: "none",
  },
});

export const navLocationCont = css.raw({
  border: "1px solid #ECECEC",
  alignSelf: "center",
  p: ".3rem",
  rounded: "4px",
  boxShadow: "2px 2px 4px #ECECEC",

  hideBelow: "lg",
});

export const navUserCont = css.raw({
  alignSelf: "center",
});

export const navUserText = css({
  color: "secondary.400",
  fontSize: ".8rem",
  p: "0",
  position: "relative",
  top: ".2rem",

  hideBelow: "lg",
});

export const mobileMenuView = css.raw({
    display: 'block',
    position: 'absolute',
    right: 0,
    top: 0,
    boxSizing: 'border-box'
})
