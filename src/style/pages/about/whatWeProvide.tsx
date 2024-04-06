import { css } from "../../../../styled-system/css";

export const whatWeProvideCont = css.raw({
  px: ["1rem", "1rem", "1.5rem", "7%"],
  py: ["1rem", "1rem", "2rem", "3rem"],
  w: "100%",
  textAlign: 'center',

  "& > h3": {
    fontSize: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
    lineHeight: "2rem",
    fontWeight: "bold",
    color: "secondary.100",
    mb: ["2rem"],
  },
});

export const whatWeProvideCardCont = css.raw({})