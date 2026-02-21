import { css } from "../../../../styled-system/css";

export const ourTeamCardCont = css.raw({
  w: "25rem",
  position: "relative",

  "@media screen and (max-width: 1119px)": {
    w: "16rem",
  },

  "@media screen and (max-width: 319px)": {
    w: "100%",
  },
});

export const ourTeamCardImg = css.raw({
  w: "100%",
});

export const ourTeamCardDetailsCont = css.raw({
  w: "80%",
  textAlign: "center",
  position: "absolute",
  bottom: "-30%",
  left: "50%",
  // translateX: '-50%',
  bgColor: "secondary.500",
  boxShadow: "2px 2px 2px #bebebe",
  py: "1.5rem",
  rounded: "12px",

  "& > h3": {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "secondary.100",
  },

  "& > p": {
    fontWeight: "600",
    fontSize: ".8rem",
    color: "secondary.400",
  },

  "@media screen and (max-width: 570px)": {
    bottom: "-45%",
  },

  "@media screen and (max-width: 479px)": {
    bottom: "-35%",
  },

  "@media screen and (max-width: 1119px)": {
    py: '1rem',
    bottom: '-40%',

    "& > h3": {
      fontSize: "1rem",
    },

    "& > p": {
      fontSize: ".7rem",
    },
  },
});

export const ourTeamCardDetailsIconCont = css.raw({
  pt: "1rem",

  "& > span": {
    color: "primary.100",
    fontSize: ".7rem",
  },

  "@media screen and (max-width: 1119px)": {
    pt: '.7rem'
  }
});
