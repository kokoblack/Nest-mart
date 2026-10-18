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
    columnGap: ".2rem",
  },

  "@media screen and (max-width: 340px)": {
    display: "none",
  },
});

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
  position: "relative",

  "@media screen and (max-width: 480px)": {
    fontSize: ".75rem",
    p: ".7rem",
    columnGap: ".2rem",
  },

  "@media screen and (max-width: 280px)": {
    p: ".4rem",
  },
});

export const sortText = css.raw({
  "@media screen and (max-width: 480px)": {
    fontSize: ".75rem",
    "& > span": {
      // display: "none",
    },
  },
});

export const sortIcon = css.raw({
  fontSize: "1.2rem",

  "@media screen and (max-width: 480px)": {
    fontSize: "1rem",
  },

  "@media screen and (max-width: 380px)": {
    display: "none"
  },
});

export const sortIcon2 = css.raw({
  fontSize: "1.2rem",

  "@media screen and (max-width: 480px)": {
    // display: "none"
  },
});

export const showCont = css.raw({
  border: "1px solid #ECECEC",
  rounded: "10px",
  w: "100%",
  bg: "white",
  position: "absolute",
  top: "3rem",
  left: 0,
  zIndex: 10,

  "& > P": {
    px: "1rem",
    py: ".3rem",

    _last: {
      roundedBottomLeft: "10px",
      roundedBottomRight: "10px",
    },

    _first: {
      roundedTopLeft: "10px",
      roundedTopRight: "10px",
    },

    _hover: {
      bg: "#ECECEC",
    },
  },

  "@media screen and (max-width: 480px)": {
    top: "2.8rem",
  },
});

export const Cont = css.raw({
  "@media screen and (max-width: 660px)": {
    justifyContent: "center"
  },

  "@media screen and (max-width: 580px)": {
    flexDir: "column-reverse",
    gap: "1rem",

    "& > div": {
      w: "100%"
    }
  },
});
