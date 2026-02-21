import { css } from "../../../../styled-system/css";

export const contactFormCont = css.raw({
  m: "3rem 0 .5rem 0",
  px: "5rem",

  "& > h2": {
    fontSize: "1rem",
    fontWeight: "bold",
    mb: ".5rem",
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

export const contactFormFirstSection = css.raw({
  w: "[65%]",

  "@media (max-width: 1490px)": {
    w: "60%",
  },

  "@media (max-width: 1190px)": {
    w: "55%",
  },

  "@media (max-width: 990px)": {
    w: "100%",
  },
});

export const contactFormArticle = css.raw({
  "& > h3": {
    fontSize: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
    // lineHeight: "2.5rem",
    fontWeight: "bold",
    color: "secondary.100",
    mb: [".5rem"],
  },

  "& > p": {
    fontSize: ".825rem",
    color: "secondary.400",
    fontFamily: "lato",
    mb: "1.5rem",
  },
});

export const contactFormFieldset = css.raw({
  "& > input": {
    outline: "none",
    border: "1px #ECECEC solid",
    borderRadius: "10px",
    p: "1rem",
    w: "49.3%",
    mb: "1rem",
    // columnGap: "1rem"
  },

  //   "& > input:placeholder": {
  //       color: "secondary.400",
  //       fontWeight: "bold"
  //   },

  "& > textarea": {
    outline: "none",
    border: "1px #B6B6B6 solid",
    borderRadius: "10px",
    w: "100%",
    h: "15rem",
    p: ".5rem",
  },

  "@media (max-width: 1490px)": {
    "& > input": {
      w: "49%",
    },
  },

  "@media (max-width: 1190px)": {
    "& > input": {
      w: "48%",
      p: ".8rem",
    },

    "& > textarea": {
      h: "10rem",
    },
  },

  "@media (max-width: 990px)": {
    justifyContent: "center",

    "& > input": {
      w: "49%",
    },
  },

  "@media (max-width: 690px)": {
    "& > input": {
      w: "100%",
    },

    "& > textarea": {
      h: "13rem",
    },
  },
});

export const contactFormSecondSection = css.raw({
  w: "[30%]",

  "& > figure > img": {
    ml: "auto",
  },

  "@media (max-width: 1490px)": {
    w: "35%",
  },

  "@media (max-width: 1190px)": {
    w: "38%",
  },

  "@media (max-width: 990px)": {
    "& > figure": {},
    display: "none",
  },
});

export const contactFormButon = css.raw({
  rounded: "10px",
  mt: "2rem",

  "@media (max-width: 425px)": {
    fontSize: ".875rem",
    px: "2rem",
    py: "1rem",
  },
});
