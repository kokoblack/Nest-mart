import { css } from "../../../../styled-system/css";

export const prodInfoCont = css.raw({
  mb: "2rem",
  w: "100%",
  boxSizing: "border-box",
});

export const prodInfoFirstSec = css.raw({
  mb: "2rem",
  w: "100%",

  "@media screen and (max-width: 720px)": {
    flexDirection: "column",
  },

  "& figure": {
    w: "445px",
    objectFit: "contain",
    flexShrink: "0",

    "@media screen and (max-width: 990px)": {
      w: "335px",
    },

    "@media screen and (max-width: 720px)": {
      w: "100%",
      border: "1px solid #ECECEC",
      rounded: "15px",
    },
  },
});

export const prodInfoDetailSec = css.raw({
  display: "flex",
  flexDirection: "column",
});

export const prodInfoMainImg = css.raw({
  border: "1px solid #ECECEC",
  rounded: "15px",

  "@media screen and (max-width: 720px)": {
    w: "60%",
    border: "0",
    margin: "auto",
  },

  "@media screen and (max-width: 480px)": {
    w: "70%",
  },
});

export const prodInfoName = css.raw({
  fontSize: "2rem",
  fontWeight: "bold",
  mt: "1rem",
  mb: ".5rem",
  color: "secondary.100",

  "@media screen and (max-width: 990px)": {
    fontSize: "1.5rem",
    mt: ".6rem",
    mb: ".3rem",
  },

  "@media screen and (max-width: 320px)": {
    fontSize: "1.2rem",
  },
});

export const prodInfoSalesOff = css.raw({
  color: "pink",
  bg: "#FDE0E9",
  fontSize: ".9rem",
  px: ".8rem",
  py: ".4rem",
  w: "fit-content",
  fontWeight: "bold",
  rounded: "5px",

  "@media screen and (max-width: 990px)": {
    fontSize: ".6rem",
    px: ".6rem",
    py: ".3rem",
  },

  "@media screen and (max-width: 720px)": {
    display: "none",
  },
  
});

export const prodInfoRating = css.raw({
  color: "secondary.200",
  fontSize: ".9rem",

  "@media screen and (max-width: 990px)": {
    fontSize: ".7rem",
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".6rem",
  },
});

export const prodInfoReview = css.raw({
  color: "secondary.700",
  fontSize: ".9rem",
  fontWeight: "500",

  "@media screen and (max-width: 990px)": {
    fontSize: ".7rem",
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".6rem",
  },
});

export const prodInfoCurPrice = css.raw({
  color: "primary.100",
  fontSize: "3.5rem",
  fontWeight: "bold",

  "@media screen and (max-width: 990px)": {
    fontSize: "2.5rem",
  },

  "@media screen and (max-width: 320px)": {
    fontSize: "2rem",
  },
});

export const prodInfoInitprice = css.raw({
  color: "secondary.700",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textDecoration: "line-through",

  "@media screen and (max-width: 990px)": {
    fontSize: ".8rem",
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".7rem",
  },
});

export const prodInfoOffPrice = css.raw({
  color: "secondary.200",
  fontSize: ".8rem",
  fontWeight: "700",

  "@media screen and (max-width: 990px)": {
    fontSize: ".6rem",
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".55rem",
  },
});

export const prodInfoDetail = css.raw({
  color: "secondary.400",
  fontSize: "1rem",
  fontWeight: "500",
  mt: ".6rem",
  mb: "1rem",

  "@media screen and (max-width: 990px)": {
    fontSize: ".75rem",
    mt: ".3rem",
    mb: ".6rem",
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".7rem",
  },
});

export const prodInfoSizeCont = css.raw({
  color: "secondary.400",
  fontSize: ".9rem",
  fontWeight: "500",
  mb: "1rem",

  "@media screen and (max-width: 990px)": {
    fontSize: ".7rem",
  },

  "@media screen and (max-width: 480px)": {
    m: "0"
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".65rem",
    columnGap: ".5rem",
    flexWrap: "wrap"
  },

  "& p:last-child": {
    bg: "primary.100",
    px: ".6rem",
    py: ".3rem",
    rounded: "5px",
    color: "white",
  },
});

export const prodInfoSelectCont = css.raw({
  border: "2px solid #3BB77E",
  rounded: "5px",
  pr: ".4rem",
  pl: "1.2rem",
  py: ".1rem",
  bg: "white",

  "@media screen and (max-width: 990px)": {
    fontSize: ".8rem",
    py: ".15rem",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: "1rem",
    pr: ".5rem",
    pl: "1rem",
    // flex: 1
    // w: "65px"
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".8rem",
    pl: ".8rem",
  },

  "@media screen and (max-width: 280px)": {
    display: "none"
  },
});

export const prodInfoSelectIcon = css.raw({
  color: "primary.100",
  cursor: "pointer"
});

export const prodInfoSelectButton = css.raw({
  fontSize: "1rem",

  "@media screen and (max-width: 990px)": {
    fontSize: ".8rem",
  },

  "@media screen and (max-width: 480px)": {
    // w: "70%",
    justifyContent: "center",
    fontSize: "1rem",
    flex: 2
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".8rem",
  },
});

export const prodInfoSelectWishList = css.raw({
  border: "1px solid #ECECEC",
  color: "secondary.400",
  py: ".6rem",
  px: ".7rem",
  fontSize: "1.1rem",
  rounded: "5px",
  cursor: "pointer",

  "@media screen and (max-width: 990px)": {
    fontSize: ".8rem",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: "1.1rem",
    // flex: 1
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".8rem",
  },
})

export const prodInfoSecondCont = css.raw({
  //   w: "50%",

  "@media screen and (max-width: 720px)": {
    columnGap: ".5rem",
  },

  "@media screen and (max-width: 480px)": {
    flexDirection: "column",
    alignItems: "start",
    rowGap: "1rem",
  },
});

export const prodInfoSecondContImg = css.raw({
  "& figure > img": {
    w: "6.2rem",
    rounded: "10px",

    "@media screen and (max-width: 990px)": {
      w: "4.55rem",
    },

    "@media screen and (max-width: 720px)": {
      w: "3rem",
    },

    "@media screen and (max-width: 480px)": {
      w: "5rem",
    },
  },
});

export const prodInfoType = css.raw({
  display: "flex",
  flexDirection: "column",
  rowGap: ".4rem",
  fontSize: ".8rem",
  color: "secondary.400",
  ml: ".3rem",

  "@media screen and (max-width: 990px)": {
    fontSize: ".6rem",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: ".7rem"
  },

  "@media screen and (max-width: 320px)": {
    fontSize: ".6rem",
  },

  "& p > span": {
    color: "primary.100",
  },
});

export const prodInfoSideMenu = css.raw({
  "@media screen and (max-width: 1350px)": {
    display: "none",
  },
});
