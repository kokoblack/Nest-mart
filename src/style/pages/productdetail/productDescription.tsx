import { css } from "../../../../styled-system/css";

export const productDescriptionCont = css.raw({
  p: "2rem",
  border: "1px solid #ECECEC",
  rounded: "15px",

  "& p": {
    color: "secondary.400",
    fontWeight: "500",
  },

  "& h3": {
    fontSize: "1.5rem",
    color: "secondary.100",
    fontWeight: "bold",
    mt: "1.5rem",
  },

  "& hr": {
    border: "1px solid #ECECEC",
    my: "1rem",
  },

  "@media screen and (max-width: 1000px)": {
    "& p": {
      fontSize: ".8rem",
    },

    "& h3": {
      fontSize: "1.2rem",
    },
  },

  "@media screen and (max-width: 480px)": {
    p: "1rem",
  },

  "@media screen and (max-width: 320px)": {
    "& p": {
      fontSize: ".7rem",
    },

    "& h3": {
      fontSize: "1.1rem",
    },
  },
});

export const productDescriptionTags = css.raw({
  fontWeight: "bold",
  mb: "2rem",
  fontFamily: "quicksand",

  "& > p": {
    px: "1.5rem",
    py: ".5rem",
    fontSize: "1.1rem",
    border: "1px solid #ECECEC",
    rounded: "30px",
  },

  "@media screen and (max-width: 1000px)": {
    "& p": {
      fontSize: ".85rem",
    },
  },

  "@media screen and (max-width: 620px)": {
    "& p:nth-child(3)": {
      display: "none",
    },

    "& p:nth-child(4)": {
      display: "none",
    },
  },

  "@media screen and (max-width: 480px)": {
    mb: "1rem",

    "& > p": {
      px: ".9rem",
      py: ".3rem",
    },
  },

  "@media screen and (max-width: 320px)": {
    "& p": {
      fontSize: ".75rem",
      px: ".6rem",
      py: ".2rem",
    },
  },
});

export const productDescriptionInfo = css.raw({
  fontSize: ".9rem",
  mt: "1.5rem",

  "& ul": {
    listStyleType: "disc",
    color: "secondary.400",
    fontWeight: "500",
    ml: "1rem",
  },

  "& ul > li": {
    my: ".5rem",
  },

  "& div > p": {
    my: ".5rem",
  },

  "@media screen and (max-width: 1000px)": {
    fontSize: ".7rem",

    "& p": {
      fontSize: ".7rem",
    },
  },

  "@media screen and (max-width: 320px)": {
    mt: "1rem",

    fontSize: ".6rem",

    "& p": {
      fontSize: ".6rem",
    },
  },
});

export const productDescriptionHeading = css.raw({
  "& > h3": {
    mb: "2rem",
  },

  "& > p": {
    fontSize: ".9rem",
    my: ".7rem",
  },

  "@media screen and (max-width: 1000px)": {
    "& > h3": {
      mb: "1.5rem",
    },

    "& > p": {
      fontSize: ".7rem",
    },
  },

  "@media screen and (max-width: 320px)": {
    "& > h3": {
      mb: "1.2rem",
    },

    "& > p": {
      fontSize: ".6rem",
    },
  },
});