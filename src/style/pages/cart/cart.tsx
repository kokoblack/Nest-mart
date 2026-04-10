import { css } from "../../../../styled-system/css";

export const cartCont = css.raw({
  fontWeight: "bold",
  w: "100%",
});

export const cartNoItems = css.raw({
  color: 'secondary.100',
  fontSize: "3rem",

  "@media screen and (max-width: 660px)": {
    fontSize: "2.5rem",

  },

  "@media screen and (max-width: 480px)": {
    fontSize: "2rem",

  }
})

export const cartFirstCont = css.raw({
  mb: "3rem",
  mt: "2rem",

  "@media screen and (max-width: 992px)": {
    display: "block",
    w: "fit-content",
    mx: "auto",
  },

  "@media screen and (max-width: 660px)": {
    mt: "1rem",
    w: "100%",
    mx: "0",

    "& > section:first-child": {
      w: "100%",
    },
  },
});

export const cartSecondCont = css.raw({
  border: "1px solid",
  borderInlineColor: "transparent",
  borderTopColor: "secondary.800",
  borderBottomColor: "transparent",
  mt: "1rem",
  pt: "1rem",

  "@media screen and (max-width: 520px)": {
    "& > section:last-child": {
      flexDirection: "column",
    },
  },

  "@media screen and (max-width: 320px)": {
    "& > section:first-child": {
      flexDirection: "column",

      "& button": {
        mx: 0,
        mb: ".5rem",
        w: "100%",
      },
    },
  },

  "& input": {
    border: "1px solid #ECECEC",
    rounded: "5px",
    p: ".5rem",
    fontSize: ".65rem",
    color: "secondary.700",
    fontWeight: "bold",

    _placeholder: {
      fontSize: ".65rem",
      color: "secondary.700",
    },

    _focus: {
      outline: "none",

      _placeholder: {
        color: "transparent",
      },
    },
  },
});

export const cartCalShipSec = css.raw({
  w: "20rem",
  px: ".8rem",
  py: "1rem",
  border: "1px solid #ECECEC",
  rounded: "10px",

  "& > h3": {
    color: "secondary.100",
    fontSize: ".9rem",
    mb: ".1rem",
  },

  "& > p": {
    color: "secondary.700",
    fontSize: ".75rem",
    fontWeight: "500",
  },

  "& > p > span": {
    color: "primary.100",
  },

  "@media screen and (max-width: 520px)": {
    w: "100%",
  },
});

export const cartCalShipState = css.raw({
  fontSize: ".65rem",
  color: "secondary.100",
  border: "1px solid #ECECEC",
  rounded: "5px",
  p: ".5rem",
  w: "100%",
  mt: "1rem",

  "& > p:last-child": {
    color: "secondary.700",
    ml: "auto",
    fontSize: "1.5rem",
    lineHeight: "0",
  },
});

export const cartCalShipInput = css.raw({
  mt: ".5rem",

  "& input": {
    w: "50%",
  },

  "@media screen and (max-width: 320px)": {
    flexDirection: "column",

    "& input": {
      w: "100%",
      mt: ".4rem",
    },
  },
});

export const cartCouponCont = css.raw({
  w: "fit-content",
  mt: "1rem",
  ml: "auto",

  "& > h3": {
    color: "secondary.100",
    fontSize: ".9rem",
    mb: ".1rem",
  },

  "& > p": {
    color: "secondary.700",
    fontSize: ".75rem",
    fontWeight: "500",
  },

  "@media screen and (max-width: 520px)": {
    mt: "1.5rem",
    ml: "0",
    pl: "1rem",
  },

  "@media screen and (max-width: 320px)": {
    w: "100%",
  },
});

export const cartCouponInputCont = css.raw({
  mt: "1rem",

  "@media screen and (max-width: 320px)": {
    flexDirection: "column",
    w: "100%",

    "& input": {
      w: "100%",
      mb: ".4rem",
    },
    "& button": {
      w: "100%",
    },
  },
});

export const cartCheckoutMain = css.raw({
  border: "1px solid #ECECEC",
  rounded: "5px",
  pt: ".8rem",
  pb: "1.2rem",
  px: ".8rem",
  w: "18rem",
  boxShadow: "2px 2px 4px #ECECEC",
  mt: "6rem",

  "@media screen and (max-width: 992px)": {
    mt: "2rem",
  },

  "@media screen and (max-width: 520px)": {
    w: "100%",
  },
});

export const cartCheckoutCont = css.raw({
  border: "1px solid #ECECEC",

  "& hr": {
    border: "1px solid #ECECEC",
  },

  "& p": {
    color: "secondary.700",
    fontSize: ".65rem",
  },
});

export const cartCheckoutHR = css.raw({
  my: ".5rem",
  border: "2px solid #ECECEC",
  w: "90%",
  mx: "auto",
});

export const cartCheckoutShip = css.raw({
  display: "flex",
  alignItems: "center",
  px: ".4rem",
  py: ".3rem",

  "& p:last-child": {
    color: "secondary.100",
    fontSize: ".7rem",
    ml: "auto",
  },
});

export const cartCheckoutTotal = css.raw({
  display: "flex",
  alignItems: "center",
  px: ".4rem",
  py: ".3rem",

  "& p:last-child": {
    color: "primary.100",
    fontSize: ".8rem",
    ml: "auto",
  },
});
