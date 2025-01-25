import { css } from "../../../../styled-system/css";

export const banner2Container = css.raw({
  w: "100%",
  mt: ["1rem", "1rem", "1rem", "2rem"],
  mb: "3rem",
  rounded: "1.2rem",
  boxSizing: "border-box",
  bgPosition: "center",
  bgSize: "cover",
  px: ["1rem", "1rem", "2rem", "3rem", "5rem"],
  py: ["2rem", "2rem", "2rem", "4rem"],
  bgImage: "url(assets/blogBanner.png)",
  columnGap: "2rem"
});

export const banner2firstSection = css.raw({
  color: "secondary.400",
  fontWeight: "bold",

  "& > h3": {
    fontSize: ["1.5rem", "1.5rem", "2rem", "3rem"],
    color: "secondary.100",
    mb: [".7rem", ".7rem", ".8rem", ".8rem"],
    fontWeight: "1000",
    lineHeight:  ["1.5rem", "1.5rem", "2rem", "3rem"],
  },
});

export const banner2SecondSection = css.raw({
  // w: "10%",
  rowGap: "1rem",

  "@media screen and (max-width: 580px)": {
    display: "none",
  },
});

export const banner2tag = css.raw({
  w: "fit-content",
  px: "1rem",
  py: ".5rem",
  bgColor: "white",
  rounded: "3rem",
  boxShadow: "2px 2px 8px #e0dcdc",

  "& > span": {
    color: "secondary.400",
    fontSize: "1.1rem",
    fontWeight: "normal",
    m: "0",
  },

  "& > p": {
    fontSize: "1.1rem",
    color: "primary.100",
    fontWeight: "1000",
  },

  "@media screen and (max-width: 769px)": {
    "& > span": {
      fontSize: ".925rem",
      m: "0",
    },

    "& > p": {
      fontSize: ".925rem",
    },
  },
});
