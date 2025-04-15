import { css } from "../../../../styled-system/css";

export const welcomeToNestCont = css.raw({
  px: ["1rem", "1rem", "1.5rem", "7%"],
  py: ["1rem", "1rem", "2rem", "3rem"],
  w: "100%",

  "@media screen and (max-width: 1119px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const welcomeToNestMainImg = css.raw({
  // float: 'left',
  w: "45%",

  "& img": {
    mx: "auto",
  },

  "@media screen and (max-width: 1269px)": {
    w: "55%",
  },

  "@media screen and (max-width: 1119px)": {
    w: "26rem",
  },

  "@media screen and (max-width: 479px)": {
    w: "15.5rem",
    // display: 'none'
  },
});

export const welcomeToNestContent = css.raw({
  // float: 'left',
  w: "55%",

  "& > article > h3": {
    fontSize: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
    lineHeight: "2rem",
    fontWeight: "bold",
    color: "secondary.100",
    mb: ["2rem"],
  },

  "& > article > p": {
    fontSize: ".9rem",
    mb: ["1rem"],
    color: "secondary.400",
    fontFamily: "lato",
  },

  "@media screen and (max-width: 1269px)": {
    w: "45%",
  },

  "@media screen and (max-width: 1119px)": {
    w: "100%",

    "& > article > h3": {
        textAlign: 'center'
    }
  },

  "@media screen and (max-width: 479px)": {

    "& > article > h3": {
        mb: '1rem'
    }
  },
});

export const welcomeToNestContentImgCont = css.raw({
  mt: ["2rem"],

  "& > figure": {
    w: ["9rem"],
  },
});
