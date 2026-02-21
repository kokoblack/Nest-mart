import { css } from "../../../../styled-system/css";

export const productCardListViewCont = css.raw({
  display: "flex",
  columnGap: "1rem",
  mt: "1rem",
  alignItems: "center",
  cursor: "pointer"
});

export const productCardListViewImgSection = css.raw({
  position: "relative",
  border: "1px solid #ECECEC",
  py: "1rem",
  rounded: "10px",

  "@media screen and (max-width: 360px)": {
    py: "1.5rem"
  },
});

export const productCardListViewType = css.raw({
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

  "@media screen and (max-width: 480px)": {
    fontSize: ".5rem",
  },

  "@media screen and (max-width: 360px)": {
    px: ".6rem",
    py: ".3rem",
  },
});

export const productCardListViewImg = css.raw({
  w: "13rem",

  "@media screen and (max-width: 680px)": {
    w: "10rem",
  },

  "@media screen and (max-width: 480px)": {
    w: "9rem",
  },

  "@media screen and (max-width: 360px)": {
    w: "6.5rem",
  },
});

export const productCardListViewCat = css.raw({
  color: "secondary.1300",
  fontSize: ".75rem",
  fontWeight: "bold",

  "@media screen and (max-width: 680px)": {
    fontSize: ".65rem",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: ".6rem",
  },
});

export const productCardListViewName = css.raw({
  color: "secondary.100",
  fontSize: "1.3rem",
  fontFamily: "quicksand",
  fontWeight: "bold",
  mt: ".3rem",
  mb: ".2rem",
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineClamp: "1",
  display: "-webkit-box",
  boxOrient: "vertical",

  "@media screen and (max-width: 680px)": {
    fontSize: "1rem",
    mt: ".2rem",
    mb: ".15rem",
  },
});

export const productCardListViewRating = css.raw({
  fontSize: ".7rem",
  color: "secondary.1300",

  "@media screen and (max-width: 680px)": {
    fontSize: ".65rem",
  },

  "@media screen and (max-width: 360px)": {
    "& > span > i": {
      display: "none",
    },
    "& > span > i:last-child" : {
      display: 'block'
    }
  },
});

export const productCardListViewDesc = css.raw({
  fontSize: ".75rem",
  color: "secondary.400",
  mt: ".5rem",
  fontWeight: "500",
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineClamp: "2",
  display: "-webkit-box",
  boxOrient: "vertical",

  "@media screen and (max-width: 680px)": {
    fontSize: ".7rem",
  },

  "@media screen and (max-width: 360px)": {
    mt: ".2rem"
  },
});

export const productCardListViewPriceCont = css.raw({
  fontWeight: "bold",
  mt: ".5rem",
  display: "flex",
  columnGap: ".3rem",
  alignItems: "center",
  gridColumnGap: ".5rem",

  "@media screen and (max-width: 360px)": {
    mt: ".2rem",
    flexDirection: "column",
    alignItems: "start"
  },
});

export const productCardListViewCurentPrice = css.raw({
  color: "primary.100",
  fontSize: "1.3rem",

  "@media screen and (max-width: 680px)": {
    fontSize: "1.1rem",
  },
});

export const productCardListViewInitPrice = css.raw({
  color: "secondary.1300",
  textDecoration: "line-through",
  fontSize: ".9rem",

  "@media screen and (max-width: 680px)": {
    fontSize: ".8rem",
  },
});

export const productCardListViewInitButtonCont = css.raw({
  fontFamily: "quicksand",
  fontSize: ".8rem",
  mt: ".8rem",

  "@media screen and (max-width: 680px)": {
    fontSize: ".7rem",
    px: "1.2rem",
    mt: ".5rem",
  },

  "@media screen and (max-width: 480px)": {
    display: "none",
  },
});

export const productCardListViewInitButtonIcon = css.raw({
  fontSize: "1rem",

  "@media screen and (max-width: 680px)": {
    fontSize: ".8rem",
  },
});

export const productCardListViewInitButtonText = css.raw({
  mt: ".2rem",
});
