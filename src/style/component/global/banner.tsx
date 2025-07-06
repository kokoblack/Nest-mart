import { css } from "../../../../styled-system/css";

export const bannerContainer = css.raw({
  w: "100%",
  mt: ["1rem", "1rem", "1rem", "2rem"],
  mb: "3rem",
  rounded: "1.2rem",
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden", 
});

export const bannerDiscountContainer = css.raw({
  bgPosition: "center",
  bgSize: "cover",
  w: "100%",
  pl: ["1rem", "1rem", "2rem", "3rem", "5rem"],
  pt: ["2rem", "2rem", "2rem", "4rem"],
  pb: ["3rem", "3rem", "3rem", "6rem"],
  rounded: "1.2rem",

  "@media screen and (max-width: 991px)": {
    pr: ["1rem", "1rem", "2rem", "3rem"]
  },
});

export const bannerBigText = css.raw({
  fontSize: ["1.5rem", "1.5rem", "2rem", "3rem"],
  color: "secondary.100",
  mb: [".7rem", ".7rem", ".8rem", "1.5rem"],
  fontWeight: "1000",
  lineHeight: ["1.5rem", "1.5rem", "2rem", "3rem"],

  "@media screen and (max-width: 991px)": {
    '& > br': {
        display: 'none'
    },

    w: "80%"
  },
});

export const bannerSmallText = css.raw({
  fontSize: [".7rem", ".7rem", ".9rem", "1rem"],
  color: "secondary.400",
  mb: [".7rem", ".7rem", ".9rem", "2.5rem"],
  fontWeight: "500",
});