import { css } from "../../../../styled-system/css";

export const ourPerformanceCont = css.raw({
  w: "100%",
});

export const ourPerformanceFirstSection = css.raw({
  px: ["1rem", "1rem", "1.5rem", "7%"],
  py: ["1rem", "1rem", "1.5rem", "2rem"],
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
    textAlign: "center",

    "& > p": {
      textAlign: "center",
    },

    "& > article > h3": {
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
  px: ["1rem", "1rem", "1.5rem", "7%"],
  py: ["1rem", "1rem", "1.5rem", "2rem"],

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

export const ourPerformanceBanner = css.raw({
  w: "100%",
  bgSize: "cover",
  bgPosition: "center",
  py: ["4rem"],
  px: ["1rem"],
  my: ['1rem'],
  rounded: '1rem'
});

export const ourPerformanceBannerTextCont = css.raw({
  // w:'fit-content',
  flexShrink: 1,
  textAlign: 'center',
  color: "secondary.500",

  "& > p:first-child": {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: '3rem'
  },

  "& > p:last-child": {
    fontSize: "1.2rem",
  },

  "@media screen and (max-width: 769px)": {
    "& > p:first-child": {
      fontSize: "2.5rem",
      fontWeight: "bold",
      lineHeight: '2.5rem'
    },
  
    "& > p:last-child": {
      fontSize: "1rem",
    },
  }
});
