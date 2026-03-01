import { css } from "../../../../styled-system/css";

export const checkoutMainCont = css.raw({
  mt: "2rem",
  fontWeight: "bold",
  w: "fit-content",
  mx: "auto",

  "@media screen and (max-width: 779px)": {
    w: "100%",
    mx: "0",
    mt: "1rem",
  },
});

export const checkoutCont = css.raw({
  mt: "2rem",
  columnGap: "2.5rem",

  "@media screen and (max-width: 1280px)": {
    flexDirection: "column",
  },

  "@media screen and (max-width: 480px)": {
    mt: "1rem",
  },
});

export const checkoutFirstCont = css.raw({
  w: "fit-content",

  "@media screen and (max-width: 779px)": {
    w: "100%",

    "& > section:first-child": {
      flexDirection: "column",
      w: "100%",
      alignItems: "start",
      rowGap: ".8rem",
    },
  },
});

export const checkoutCouponCont = css.raw({
  w: "fit-content",

  "& > div": {
    border: "1px solid #ECECEC",
    roundedBottomLeft: "10px",
    roundedTopLeft: "10px",
    w: "fit-content",
    color: "secondary.700",
    pl: "1rem",
    py: ".5rem",
    pr: "2.5rem",
  },

  "& input": {
    fontSize: ".8rem",
    color: "secondary.400",

    _placeholder: {
      fontSize: ".8rem",
      color: "secondary.400",
    },

    _focus: {
      outline: "none",

      _placeholder: {
        color: "transparent",
      },
    },
  },

  "& > button": {
    roundedTopRight: "10px",
    roundedBottomRight: "10px",
    px: "1rem",
    py: ".6rem",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: ".9rem",

    "& input": {
      fontSize: ".7rem",

      _placeholder: {
        fontSize: ".7rem",
      },
    },

    "& > button": {
      px: "1rem",
      py: ".6rem",
      fontSize: ".65rem",
    },
  },

  "@media screen and (max-width: 380px)": {
    flexDirection: "column",
    rowGap: ".5rem",
    w: "100%",

    "& > div": {
      border: "1px solid #ECECEC",
      rounded: "10px",
      w: "100%",
      justifyContent: "start",
      px: ".5rem"
    },

    "& > button": {
      rounded: "5px"
    },

    "& input": {
      w: "80%"
    }
  },
});

export const checkoutLogintag = css.raw({
  fontSize: ".8rem",
  border: "1px solid #ECECEC",
  pl: "1rem",
  pr: "2.5rem",
  py: ".5rem",
  w: "fit-content",
  rounded: "10px",
  fontFamily: "lato",
  color: "secondary.700",

  "& > p > span ": {
    color: "primary.100",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: ".7rem",
  },

  "@media screen and (max-width: 380px)": {
    px:".5rem",
    w: "100%"
  },
});

export const checkoutBillingCont = css.raw({
  mt: "1.2rem",
  w: "42.5rem",

  "& > h3": {
    fontSize: "1.2rem",
    color: "secondary.100",
    w: "fit-content",
  },

  "@media screen and (max-width: 779px)": {
    w: "100%",
  },

  // "@media screen and (max-width: 480px)": {
  //   "& > h3": {
  //   fontSize: "1.1rem",
  // },
  // },
});

export const checkoutFormCont = css.raw({
  mt: "1rem",

  "& div": {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    columnGap: "1rem",
    mb: "1rem",
  },

  "& input": {
    w: "50%",
    px: ".8rem",
    py: ".8rem",
    fontSize: ".8rem",
    color: "secondary.400",
    border: "1px solid #ECECEC",
    rounded: "5px",
    fontFamily: "quicksand",

    _placeholder: {
      fontSize: ".8rem",
      color: "secondary.400",
    },

    _focus: {
      outline: "none",

      _placeholder: {
        color: "transparent",
      },
    },
  },

  "@media screen and (max-width: 480px)": {
    fontSize: ".9rem",

    "& input": {
      fontSize: ".7rem",

      _placeholder: {
        fontSize: ".7rem",
      },
    },
  },
});

export const checkoutOrderCont = css.raw({
  border: "1px solid #ECECEC",
  p: "2rem",
  w: "fit-content",
  rounded: "10px",

  "& > div > h3": {
    fontSize: "1.2rem",
    color: "secondary.100",
    fontFamily: "quicksand",
  },

  "& > div > p": {
    fontSize: ".8rem",
    color: "secondary.700",
    ml: "auto",
  },

  "& hr": {
    border: "1px solid #ECECEC",
    mt: "1rem",
    mb: "1.5rem",
  },

  "@media screen and (max-width: 1280px)": {
    w: "42.5rem",
  },

  "@media screen and (max-width: 779px)": {
    w: "100%",
  },

  "@media screen and (max-width: 480px)": {
    p: "1rem",
  },
});

export const checkoutOrderImg = css.raw({
  w: "88px",
  flexShrink: "0",

  "& img": {
    border: "1px solid #ECECEC",
    rounded: "10px",
  },

  "@media screen and (max-width: 480px)": {
    w: "75px",
  },

  "@media screen and (max-width: 380px)": {
    mx: "auto",
    mb: ".5rem",
    w: "5.5rem",

    "& img": {
      border: "none",
    },
  },
});

export const checkoutOrderDetailCont = css.raw({
  fontSize: ".75rem",
  color: "secondary.400",
  border: "1px solid #ECECEC",
  w: "fit-content",
  p: ".7rem",

  "@media screen and (max-width: 1280px)": {
    w: "100%",
    justifyContent: "space-between",

    "& > div": {
      w: "fit-content",
    },
  },

  "@media screen and (max-width: 480px)": {
    fontSize: ".65rem",
  },

  "@media screen and (max-width: 380px)": {
    flexDirection: "column",
    alignItems: "start",
    fontSize: ".7rem",
  },
});

export const checkoutOrderName = css.raw({
  fontSize: ".8rem",
  color: "secondary.100",
  fontFamily: "quicksand",

  "@media screen and (max-width: 480px)": {
    fontSize: ".75rem",
  },

  "@media screen and (max-width: 380px)": {
    fontSize: ".8rem",
  },
});

export const checkoutOrderprice = css.raw({
  fontSize: "1rem",
  color: "primary.100",

  "@media screen and (max-width: 480px)": {
    fontSize: ".9rem",
  },

  "@media screen and (max-width: 380px)": {
    fontSize: "1rem",
  },
});

export const checkoutPaymentCont = css.raw({
  w: "fit-content",
  mt: "1.5rem",

  "& h3": {
    color: "secondary.100",
    fontSize: "1.2rem",
  },
});

export const checkoutPaymentForm = css.raw({
  mt: "1rem",
  mb: "1rem",

  "& > div": {
    color: "secondary.100",
    fontSize: ".75rem",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    columnGap: ".5rem",
    my: ".5rem",
  },
});

export const checkoutPaymentIcon = css.raw({
  mb: "1rem",

  "& > i": {
    fontSize: "2.5rem",
  },
});

export const checkoutSecondCont = css.raw({
  "@media screen and (max-width: 779px)": {
    w: "100%",
  },
});

// export const checkoutFirstCont = css.raw({
// });

// export const checkoutFirstCont = css.raw({
// });
