import { css } from "../../../../styled-system/css";

export const howCanWeHelpCont = css.raw({
  m: "3rem 0 .5rem 0",
  px: "5rem",

  "& > h2": {
    fontSize: "1rem",
    fontWeight: "bold",
    mb: "1rem",
    color: "primary.100",
  },

  "@media (max-width: 1024px)": {
    px: "3rem",
  },

  "@media (max-width: 425px)": {
    px: "1.5rem",
  },

  "@media (max-width: 320px)": {
    px: "1rem",
  },
});

export const howCanWeHelpArticleCont = css.raw({
  "@media (max-width: 1024px)": {
    flexWrap: "wrap",
    justifyContent: "start",
  },
});

export const howCanWeHelpFirstSection = css.raw({
  "& > article > h3": {
    fontSize: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
    lineHeight: "2.5rem",
    fontWeight: "bold",
    color: "secondary.100",
    mb: ["1.5rem"],
  },

  "& > article > p": {
    fontSize: ".9rem",
    mb: ["1rem"],
    color: "secondary.400",
    fontFamily: "lato",
  },

  "@media (max-width: 1024px)": {
    mb: [".5rem"],

    "& > article > p": {
      mb: [".5rem"],
    },
  },
});

export const howCanWeHelpSecondSection = css.raw({
  "& > article > h2": {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "secondary.100",
    mb: [".8rem"],
  },

  "& > article > p": {
    fontSize: ".9rem",
    mb: ["1rem"],
    color: "secondary.400",
    fontFamily: "lato",
  },

  "@media (max-width: 1024px)": {
    width: "49%",
  },

  "@media (max-width: 768px)": {
    width: "100%",
  },
});
export const howCanWeHelpThirdSection = css.raw({
  "& > article > h2": {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "secondary.100",
    mb: [".8rem"],
  },

  "& > article > p": {
    fontSize: ".9rem",
    mb: ["1rem"],
    color: "secondary.400",
    fontFamily: "lato",
  },

  "@media (max-width: 1024px)": {
    width: "49%",
  },

  "@media (max-width: 768px)": {
    width: "100%",
  },
});
