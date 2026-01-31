import { css } from "../../../../styled-system/css";

export const paginationCont = css.raw({
  color: "secondary.400",
  fontWeight: "bold",
  mt: "3rem",
  cursor: "pointer",

  "& > i": {
    fontSize: "1.2rem",
    p: ".7rem",
    rounded: "100%",
    bgColor: "secondary.900"
  },

  "& > span": {
    px: "1rem",
    py: ".5rem",
    rounded: "100%",
    bgColor: "secondary.900"
  },

  "@media screen and (max-width: 769px)": {
    mb: "1rem",
  },

  "@media screen and (max-width: 563px)": {
    columnGap: ".3rem",
    "& > i": {
      fontSize: ".8rem",
      p: ".6rem",
      rounded: "100%",
      bgColor: "secondary.900"
    },

    "& > span": {
      fontSize: ".8rem",
      px: ".8rem",
      py: ".4rem",
      rounded: "100%",
      bgColor: "secondary.900"
    },
  },
});
