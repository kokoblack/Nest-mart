import { css } from "../../../../styled-system/css";

export const featuredBigCardCont = css.raw({
  rounded: "10px",
  pt: ["2rem", "2rem", "2rem", "2rem", "3rem"],
  pl: ["2rem", "2rem", "2rem", "2rem", "3rem"],
  bgPosition: "center",
  bgSize: "cover",
  w: ["20rem", "20rem", "20rem", "20rem", "28rem"],
  h: ["12rem", "12rem", "12rem", "12rem", "15rem"],
  position: "relative",
  flexShrink: '0'
});

export const featuredTitle = css.raw({
  fontSize: ["1.2rem", "1.2rem", "1.2rem", "1.2rem", "1.5rem"],
  color: "secondary.100",
  mb: ".5rem",
  fontWeight: "700",
  mr: ["5rem", "5rem", "5rem", "5rem", "9rem"],
  lineHeight: ["1.2rem", "1.2rem", "1.2rem", "1.2rem", "1.5rem"],
});

export const featuredButton = css.raw({
  left: ["2rem", "2rem", "2rem", "2rem", "3rem"],
  bottom: ["2rem", "2rem", "2rem", "2rem", "3rem"],
  position: "absolute",
  fontSize: [".6rem", ".6rem", ".6rem", ".6rem", ".7rem"],
  px: [".8rem", ".8rem", ".8rem", ".8rem", "1rem"],
  py: [".4rem", ".4rem", ".4rem", ".4rem", ".5rem"],
});
