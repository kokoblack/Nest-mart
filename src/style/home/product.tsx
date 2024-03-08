import { css } from "../../../styled-system/css";

export const productContainer = css.raw({
  w: "100%",
  boxSizing: "border-box",
  color: "secondary.100",
  fontSize: ["1.7rem", "1.7rem", "1.7rem", "1.9rem", "1.9rem"],
  fontWeight: "bold",
});

export const productFirstSection = css.raw({
  w: "100%",
  mb: "2rem",

  "@media screen and (max-width: 991px)": {
    flexDirection: "column",
    alignItems: "start",
    gap: ".5rem",
  },

  "@media screen and (max-width: 479px)": {
    mb: "1rem",

    "& > nav": {
      overflowX: "scroll",
      width: "100%",
      justifyContent: "flex-start",
      px: ".2rem",

      _scrollbar: {
        w: "0px",
      },
    },

    "& > nav > ul": {
      flexShrink: "0",
    },
  },
});

export const productSecondSection = css.raw({
    display: 'grid', 
    w: '100%',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    justifyItems: 'center',
    gridColumnGap: '.8rem',
    gridRowGap: '2rem'
});
