import { css } from "../../../../styled-system/css";

export const wishlistCont = css.raw({
  fontWeight: "bold",
  mx: "auto",
  mt: "2rem",
  w: "fit-content",

  "@media screen and (max-width: 880px)": {
    mt: "1rem",
    w: "100%"
  },
});

export const wishlistTableWrapper = css.raw({
  overflowX: "auto",
  scrollBehavior: "smooth",
  scrollbar: "hidden",
  w: "100%",
  mb: "3rem",

  "@media screen and (max-width: 880px)": {
    display: "none",
  },
});

export const wishlistTableCont = css.raw({
  textAlign: "center",
  mt: "2rem",
  w: "fit-content",

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
    textAlign: "left",
  },

  "@media screen and (max-width: 1080px)": {
    "& > tr> th": {
      fontSize: ".8rem",
    },
  },
});

export const wishlistProductCont = css.raw({
  columnGap: "2rem",
  textAlign: "left",

  "@media screen and (max-width: 1080px)": {
    "& p": {
      fontSize: ".75rem",
    },

    "& i": {
      fontSize: ".75rem",
    },
  },
});

export const wishlistProductName = css.raw({
  color: "secondary.100",
});

export const wishlistImg = css.raw({
  w: "8rem",
  objectFit: "contain",
  flexShrink: "0",

  "@media screen and (max-width: 1080px)": {
    w: "80px",
  },

  "& > img": {
    border: "1px solid #ECECEC",
    rounded: "15px",

    "@media screen and (max-width: 880px)": {
      border: "none",
    },
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

  "@media screen and (max-width: 1080px)": {
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

  "@media screen and (max-width: 1080px)": {
    fontSize: "1.2rem",
  },
});

export const wishlistButton = css.raw({

  "@media screen and (max-width: 1080px)": {
    fontSize: ".65rem",
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

  "@media screen and (max-width: 880px)": {
    display: "flex",
    alignItems: "center",
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

  "& > i": {
    border: "1px solid #ECECEC",
    rounded: "5px",
    p: ".5rem",

    "@media screen and (max-width: 480px)": {
      fontSize: "1.1rem",
    },

    "@media screen and (max-width: 320px)": {
      fontSize: ".9rem",
    },
  },

  "@media screen and (max-width: 620px)": {
    m: "0",
    pt: ".5rem",
    w: "100%",
    border: "1px solid",
    borderInlineColor: "transparent",
    borderTopColor: "secondary.800",
    borderBottomColor: "transparent",
  },
});

export const wishlistMobileViewActionSelect = css.raw({
  "@media screen and (max-width: 620px)": {
    ml: "auto",
  },
});

export const wishlistMobileViewActionBut = css.raw({
  py: ".6rem",

  "@media screen and (max-width: 620px)": {
    ml: "auto",
  },
});

export const wishlistMobileViewAPrice = css.raw({
  fontSize: "1rem",
});

export const wishlistMobileViewName = css.raw({
  fontSize: ".8rem",
});
