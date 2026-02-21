import { css } from "../../../../styled-system/css";

export const ourTeamCont = css.raw({
  px: ["1rem", "1rem", "1.5rem", "7%"],
  pt: ["1rem", "1rem", "2rem", "3rem"],
  w: "100%",
  mb: '3rem',

  "& > h3": {
    fontSize: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
    lineHeight: "2rem",
    fontWeight: "bold",
    color: "secondary.100",
    textAlign: "center",
    mb: [".3rem"],
    textDecoration: 'GrayText'
  },

  "@media screen and (max-width: 1119px)": {
    mb: '4rem'
  }
});

export const ourTeamContentCont = css.raw({
  w: "100%",
  mt: "1rem",

  "@media screen and (max-width: 1119px)": {
    flexDirection: "column",
    textAlign: "center",
  },
});

export const ourTeamFirstSection = css.raw({
  w: "35%",

  "& > button": {
    mt: "1rem",
    px: "2rem",
    py: ".8rem",
  },

  "@media screen and (max-width: 1119px)": {
    w: "100%",

    "& > button": {
      mx: "auto",
    },
  },
});

export const ourTeamArticleCont = css.raw({
  "& > h3": {
    fontSize: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
    lineHeight: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
    fontWeight: "bold",
    color: "secondary.100",
    mb: ["2rem"],
  },
});

export const ourTeamTxt = css.raw({
  mb: ".5rem",
  fontSize: ".9rem",
  color: "secondary.400",
  fontFamily: "lato",
});

export const ourTeamSecondSection = css.raw({
  w: "65%",

  "@media screen and (max-width: 1119px)": {
    w: "100%",
  },

  "@media screen and (max-width: 479px)": {
    flexDirection: "column",

    '& > div:first-child': {
      mb: '3rem'
    }
  },

  "@media screen and (max-width: 319pxpx)": {
    w: "100%",
  },
});
