import { css } from "../../../../styled-system/css";

export const navContainer = css.raw({
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
  columnGap: "2%",
  w: "100%",
  position: "relative",
  borderBottom: "1px solid #dedfe2",
  boxSizing: "border-box",

  "@media screen and (max-width: 768px)": {
    pb: ".5rem",
    border: "none",
  },
});

export const hr = css({
  rotate: "180dg",
  color: "#7E7E7E",
  borderWidth: ".5px",
  height: "1.3rem",
});

export const MenuShow = css.raw({
  display: "block",
});

export const marginL = css.raw({
  "@media screen and (max-width: 359px)": {
    ml: "1rem",
  },
});

export const SearchSugContainer = css.raw({
  bg: "white",
  borderRadius: "4px",
  border: "2px solid #BCE3C9",
  position: "absolute",
  top: "3rem",
  left: -2,
  right: -2,
  zIndex: 10,
  fontSize: ".85rem",
  fontWeight: "500",
  color: "secondary.100",

  "& > section": {
    display: "flex",
    alignItems: "center",
    columnGap: ".5rem",
    px: "1rem",
    py: ".4rem",
    cursor: "pointer",
    fontSize: ".85rem",

    _hover: {
      bg: "#BCE3C9/30",
    },
  },

  "@media screen and (max-width: 768px)": {
    columnGap: "1rem",
    left: 0,
    right: 0,
    borderColor: "#dedfe2",

    "& > section": {
      _hover: {
        bg: "transparent",
      },
    },
  },
});

export const navMenuIcon = css.raw({
  fontSize: "1.5rem",
  alignSelf: "center",
  position: "relative",
  color: "primary.100",
  zIndex: "200",

  hideFrom: "769px",
});

export const navImage = css({
  w: ["1rem", "8rem", "8rem", "auto"],
  h: ["1rem", "2.5rem", "2.5rem", "auto"],
});

export const navSearchContainer = css.raw({
  position: "relative",
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
  fontFamily: "quicksand",
  color: "secondary.100",
  fontWeight: "bold",

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

  "@media screen and (max-width: 993px)": {
    columnGap: "1rem",
  },
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
  // w: "50%",
  display: "block",
  position: "absolute",
  right: "0",
  top: 0,
  zIndex: "100",
  boxSizing: "border-box",

  "@media screen and (max-width: 359px)": {
    w: "100%",
  },
});
