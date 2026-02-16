import { css } from "../../../../styled-system/css";

export const errorMainCont = css.raw({
  bg: "secondary.1400",
  w: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  h: "70vh",

  "& > h5": {
    fontSize: "10rem",
    fontFamily: "quicksand",
    color: "#6b3d3b",
    fontWeight: "bold",

    "@media screen and (max-width: 900px)": {
      fontSize: "5rem",
    },

    "@media screen and (max-width: 480px)": {
      fontSize: "3rem",
    },
  },

  "& > h3": {
    fontSize: "1.5rem",
    fontFamily: "quicksand",
    color: "secondary.100",
    fontWeight: "bold",

    "@media screen and (max-width: 900px)": {
      fontSize: "1.2rem",
    },

    "@media screen and (max-width: 480px)": {
      fontSize: "1rem",
    },
  },

  "& > p": {
    fontSize: ".9rem",
    fontFamily: "quicksand",
    color: "secondary.1200",
    mt: "1rem",
    mb: "1rem",
    w: "50%",

    "@media screen and (max-width: 900px)": {
      fontSize: ".8rem",
      w: "80%",
    },

    "@media screen and (max-width: 480px)": {
      fontSize: ".75rem",
      w: "90%",
    },
  },
});

export const errorLink = css.raw({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: ".5rem",
  color: "white",
  fontFamily: "lato",
  bg: "primary.100",
  w: "fit-content",
  px: "2rem",
  py: ".5rem",
  borderRadius: "5px",

  "@media screen and (max-width: 900px)": {
    fontSize: ".8rem",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: ".6rem",
    px: "1.2rem",
  },
});

// export const errorMainCont =  css.raw({})

// export const errorMainCont =  css.raw({})
