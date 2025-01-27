import { css } from "../../../../styled-system/css";

export const titleLinkContainer = css.raw({
  w: "100%",
  mb: "2rem",
  fontSize: ["1.7rem", "1.7rem", "1.7rem", "1.9rem", "1.9rem"],
  fontWeight: "bold",
  color: "secondary.100",

  "@media screen and (max-width: 992px)": {
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
  },

  "@media screen and (max-width: 479px)": {
    mb: "1rem",

    "& > nav": {
      overflowX: "scroll",
      width: "100%",
      justifyContent: "flex-start",
      px: ".2rem",

      _scrollbar: {
        display: "none"
      },
    },

    "& > nav > ul": {
      flexShrink: "0",
    },
  },
});
