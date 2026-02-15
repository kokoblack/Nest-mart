import { css } from "../../../../styled-system/css";

export const displayTypeCont = css.raw({
  display: "flex",
  px: ".8rem",
  py: ".8rem",
  border: "1px solid #ECECEC",
  rounded: "10px",
  fontSize: ".8rem",
  color: "secondary.600",
  fontWeight: "500",
  w: "fit-content",
  cursor: "pointer",

  "@media screen and (max-width: 480px)": {
    fontSize: ".75rem",
    p: ".7rem",
    columnGap: ".2rem"
  },

  "@media screen and (max-width: 340px)": {
    display: "none"
  }
})

export const sortContainer = css.raw({
  display: "flex",
  px: ".8rem",
  py: ".8rem",
  border: "1px solid #ECECEC",
  rounded: "10px",
  fontSize: ".8rem",
  color: "secondary.600",
  fontWeight: "500",
  w: "fit-content",
  cursor: "pointer",

  "@media screen and (max-width: 480px)": {
    fontSize: ".75rem",
    p: ".7rem",
    columnGap: ".2rem"
  },

  "@media screen and (max-width: 280px)": {
    p: ".4rem"
  }
});

export const sortText = css.raw({
  "@media screen and (max-width: 480px)": {
    fontSize: ".75rem",
    "& > span": {
      display: "none",
    },
  },
});

export const sortIcon = css.raw({
  fontSize: "1.2rem",

  "@media screen and (max-width: 480px)": {
    fontSize: "1rem",
  },
});

export const sortIcon2 = css.raw({
  fontSize: "1.2rem",

  "@media screen and (max-width: 480px)": {
    display: "none"
  },
});