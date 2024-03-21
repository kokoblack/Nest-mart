import { css } from "../../../styled-system/css";

export const featuredBigCardCont = css.raw({
  rounded: "10px",
  pt: ["1.5rem", "1.5rem", "2rem", "2rem", "3rem"],
  pl: ["1.5rem", "1.5rem", "2rem", "2rem", "3rem"],
  bgPosition: "center",
  bgSize: "cover",
  w: ["15.5rem", "15.5rem", "20rem", "20rem", "28rem"],
  h: ["9rem", "9rem", "12rem", "12rem", "15rem"],
  position: "relative",
  flexShrink: '0'
});

export const featuredTitle = css.raw({
  fontSize: ["1rem", "1rem", "1.2rem", "1.2rem", "1.5rem"],
  color: "secondary.100",
  mb: ".5rem",
  fontWeight: "700",
  mr: ["3rem", "3rem", "5rem", "5rem", "9rem"],
  lineHeight: ["1rem", "1rem", "1.2rem", "1.2rem", "1.5rem"],
});

export const featuredButton = css.raw({
  left: ["1.5rem", "1.5rem", "2rem", "2rem", "3rem"],
  bottom: ["1.5rem", "1.5rem", "2rem", "2rem", "3rem"],
  position: "absolute",
  fontSize: [".6rem", ".6rem", ".6rem", ".6rem", ".7rem"],
  px: [".8rem", ".8rem", ".8rem", ".8rem", "1rem"],
  py: [".4rem", ".4rem", ".4rem", ".4rem", ".5rem"],
});
