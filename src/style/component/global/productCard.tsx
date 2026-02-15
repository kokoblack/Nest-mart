import { css } from "../../../../styled-system/css";

export const productCardContainer = css.raw({
  w: ["13rem"],
  p: [".8rem"],
  rounded: "15px",
  bg: "secondary.500",
  border: "1px solid #ECECEC",
  fontSize: ".75rem",
  color: "secondary.700",
  position: "relative",
  cursor: "pointer",

  "@media screen and (max-width: 680px)": {
    w: "10rem ",
    fontSize: ".6rem",
  },

  "@media screen and (max-width: 540px)": {
    w: "45vw",
  },
});

export const productCardImg = css.raw({
  w: "10rem",
  mx: "auto",

  "@media screen and (max-width: 680px)": {
    w: "8rem",
  },
});

export const productCardName = css.raw({
  fontSize: ".875rem",
  lineHeight: "1rem",
  color: "secondary.100",
  fontWeight: "bold",
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineClamp: "2",
  display: "-webkit-box",
  boxOrient: "vertical",

  "@media screen and (max-width: 680px)": {
    fontSize: ".8rem",
  },
});

export const productCardCat = css.raw({
  fontSize: ".7rem",
  color: "secondary.1300",
  mb: ".5rem",
  fontFamily: "lato",

  "@media screen and (max-width: 680px)": {
    fontSize: ".65rem",
  },
});

export const productCardCureentPrice = css.raw({
  color: "primary.100",
  fontSize: ".95rem",

  "@media screen and (max-width: 680px)": {
    fontSize: ".8rem",
  },
});

export const productCardSpecial = css.raw({
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

  "@media screen and (max-width: 680px)": {
    fontSize: ".5rem",
  },
});

export const productCardButton = css.raw({
  ml: "auto",
  lineHeight: ".5rem",
  fontSize: ".8rem",

  "@media screen and (max-width: 680px)": {
    // fontSize: ".7rem",
    px: ".6rem",
  },

   "@media screen and (max-width: 380px)": {
    ml: "0",
    mt: "1rem",
    w: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: ".8rem"
  },
});

export const productCardPriceCont = css.raw({
  fontWeight: "bold",
  mt: ".5rem",
  lineHeight: 0,

  "@media screen and (max-width: 680px)": {
    columnGap: ".3rem",
  },

   "@media screen and (max-width: 380px)": {
    display: "block",
    // flexDirection: "column",
  },
});
