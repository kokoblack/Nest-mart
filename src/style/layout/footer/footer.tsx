import { css } from "../../../../styled-system/css";

export const footerContainer = css.raw({
  fontFamily: "lato",
  py: "1rem",
  color: "secondary.100",
  fontSize: ".9rem",
});

export const sectionOne = css.raw({
  // "@media screen and (max-width: 1172px)": {
  //   display: "grid",
  //   gridTemplateColumns: " repeat(3, 1fr)",
  // },

  "@media screen and (max-width: 480px)": {
    display: 'flex',
    flexDirection: "column",
    rowGap: ".3rem",
    alignItems: "center",
    textAlign: "center",
  },

  // display: "grid",
  // gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  // rowGap: "2rem",
  // justifyContent: "space-between",
  // w: "100%",
  // gridColumnGap: "1rem"
});

export const contactContainer = css.raw({
  mb: ".5rem",

  "@media screen and (max-width: 480px)": {
    justifyContent: "center",
  },
});

export const sectionTwo = css.raw({
  fontSize: ".8rem",
  color: "secondary.400",

  "@media screen and (max-width: 480px)": {
    flexDirection: "column",
    rowGap: ".3rem",
  },
});

export const socials = css.raw({
  "@media screen and (max-width: 480px)": {
    justifyContent: "center",
  },
});

export const socialsIcons = css.raw({
  px: ".3rem",
  py: ".3rem",
  bg: "primary.100",
  color: "secondary.500",
  rounded: "100%",
});

export const copyRight = css.raw({
  fontSize: ".8rem",

  "@media screen and (max-width: 480px)": {
    textAlign: "center",
  },
});
