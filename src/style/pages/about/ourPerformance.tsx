import { css } from "../../../../styled-system/css";

export const ourPerformanceCont = css.raw({
  px: ["1rem", "1rem", "1.5rem", "7%"],
  py: ["1rem", "1rem", "1.5rem", "2rem"],
  w: "100%",
});

export const ourPerformanceFirstSection = css.raw({
  mb: "3rem",

  "@media screen and (max-width: 1119px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const ourPerformanceMainImg = css.raw({
  // float: 'left',
  w: "60%",

  "& img": {
    mx: "auto",
  },

  "@media screen and (max-width: 1269px)": {
    w: "55%",
  },

  "@media screen and (max-width: 1119px)": {
    w: "28rem",
  },

  "@media screen and (max-width: 479px)": {
    w: "15.5rem",
    // display: 'none'
  },
});

export const ourPerformanceContent = css.raw({
  // float: 'left',
  w: "40%",

  "& > p": {
    color: "secondary.700",
    fontWeight: "bold",
    fontSize: ["1.2rem", "1.2rem", "1.5rem", "1.5rem"],
    pb: [".5rem", ".5rem", "1rem", "1rem"],
  },

  "& > article > h3": {
    fontSize: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
    lineHeight: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
    fontWeight: "bold",
    color: "secondary.100",
    mb: ["2rem"],
  },

  "& > article > p": {
    fontSize: ".9rem",
    //   mb: ["1rem"],
    color: "secondary.400",
    fontFamily: "lato",
  },

  "@media screen and (max-width: 1269px)": {
    w: "45%",
  },

  "@media screen and (max-width: 1119px)": {
    w: "100%",

    "& > p": {
      textAlign: "center",
    },
  },

  "@media screen and (max-width: 479px)": {
    textAlign: "center",

    "& > article > h3": {
      mb: "1rem",
    },
  },
});

export const ourPerformanceSecondSection = css.raw({
  "@media screen and (max-width: 479px)": {
    flexDirection: "column",
  },
});

export const ourPerformanceArticleCont = css.raw({
  // alignSelf: 'stretch',
  w: "32%",

  "& > h3": {
    color: "secondary.100",
    fontWeight: "bold",
    fontSize: ["1.5rem", "1.5rem", "2rem", "2rem"],
    lineHeight: ["1.5rem", "1.5rem", "2rem", "2rem"],
    pb: ["1rem", "1rem", "1.5rem", "1.5rem"],
  },

  "& > p": {
    fontSize: ".9rem",
    //   mb: ["1rem"],
    color: "secondary.400",
    fontFamily: "lato",
  },

  "@media screen and (max-width: 479px)": {
    w: "auto",
    textAlign: "center",
  },
});
