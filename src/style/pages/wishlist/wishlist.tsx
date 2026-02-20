import { css } from "../../../../styled-system/css";

export const wishlistCont = css.raw({
  fontWeight: "bold",
  mx: "auto",
  mt: "2rem",
  w: "fit-content",

  "@media screen and (max-width: 1060px)": {
    w: "100%",
  },

  "@media screen and (max-width: 768px)": {
    mt: "1rem",
    "& > p": {
      fontSize: ".7rem",
    },
  },

  "& > h3": {
    fontSize: ["1.55rem", "1.55rem", "1.55rem", "1.9rem", "1.9rem"],
    color: "secondary.100",
    fontFamily: "quicksand",
  },

  "& > p": {
    fontSize: ".8rem",
    color: "secondary.400",
    fontFamily: "quicksand",
  },

  "& > p > span": {
    color: "primary.100",
  },
});

export const wishlistTableWrapper = css.raw({
  overflowX: "auto",
  scrollBehavior: "smooth",
  w: "100%",
  mb: "3rem",

  "@media screen and (max-width: 768px)": {
    display: "none"
  },
});

export const wishlistTableCont = css.raw({
  textAlign: "center",
  mt: "2rem",
  w: "60rem",

  "@media screen and (max-width: 768px)": {
    "& > tr> th": {
      fontSize: ".85rem",
    },
  },

  "& > tr": {
    border: "2px solid #ECECEC",
  },

  "& tr > th": {
    py: "1rem",
    px: "1rem",
    color: "secondary.100",
    fontSize: "1rem",
    fontFamily: "quicksand",
    bg: "secondary.800",
    textAlign: "left",
  },

  "& tr > td": {
    px: "1rem",
    py: "1rem",
    color: "primary.100",
    textAlign: "left",
  },
});

export const wishlistProductCont = css.raw({
  columnGap: "2rem",
  textAlign: "left",

  "@media screen and (max-width: 768px)": {
    "& p": {
      fontSize: ".8rem",
    },

    "& i": {
      fontSize: ".7rem",
    },
  },
});

export const wishlistImg = css.raw({
  w: "8rem",
  objectFit: "contain",
  flexShrink: "0",

  "@media screen and (max-width: 768px)": {
    w: "90px",

    "& > img": {
      border: "none",
    },
  },

  "& > img": {
    border: "1px solid #ECECEC",
    rounded: "15px",
  },
});

export const wishlistInStock = css.raw({
  color: "primary.100",
  bg: "primary.400",
  fontSize: ".8rem",
  px: ".8rem",
  py: ".3rem",
  rounded: "5px",
  w: "fit-content",

  "@media screen and (max-width: 768px)": {
    fontSize: ".7rem",
    px: ".6rem",
    py: ".3rem",
  },
});

export const wishlistOutStock = css.raw({
  color: "pink",
  bg: "#FDE0E9",
});

export const wishlistPrice = css.raw({
  fontSize: "1.5rem",

  "@media screen and (max-width: 768px)": {
    fontSize: "1.2rem",
  },
});

export const wishlistMobileViewCont = css.raw({
  display: "none",
  w: "100%",
  border: "1px solid #ECECEC",
  p: "1rem",
  rounded: "10px",
  color: "primary.100",
  mt: "1rem",

  "@media screen and (max-width: 768px)": {
    display: "flex",
    alignItems: "center"
  },

  "@media screen and (max-width: 620px)": {
    flexDirection: "column",
    alignItems: "start",
  },
});

export const wishlistMobileViewImgSec = css.raw({
  "@media screen and (max-width: 320px)": {
    flexDirection: "column",
  },
});

export const wishlistMobileViewAction = css.raw({
  ml: "auto",
  color: "secondary.400",
  cursor: "pointer",

  "@media screen and (max-width: 620px)": {
    m: "0",
    pt: ".5rem",
    // pl: "1rem",
    w: "100%",
    border: "1px solid",
    borderInlineColor: "transparent",
    borderTopColor: "secondary.800",
    borderBottomColor: "transparent",
  },

  "& button": {
    py: ".6rem",

    "@media screen and (max-width: 620px)": {
      ml: "auto",
    },
  },
});

export const wishlistMobileViewAPrice = css.raw({
  fontSize: "1rem",
});

export const wishlistMobileViewName = css.raw({
  fontSize: ".8rem",
});
