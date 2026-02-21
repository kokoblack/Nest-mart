import { css } from "../../../../styled-system/css";

export const WhatWeProvideCardCont = css.raw({
  border: "1px solid #ECECEC",
  w: ["20rem"],
  bgColor: "secondary.500",
  px: ["1rem"],
  py: ["2rem"],
  textAlign: "center",
  rounded: "15px",
  flexShrink: "0",

  "& > p": {
    fontFamily: "lato",
    fontWeight: "500",
  },

  "@media screen and (max-width: 380px)": {
    w: "auto",
    flexShrink: '1'
  },
});

export const WhatWeProvideCardImg = css.raw({
  w: "6rem",
  mx: "auto",
});

export const WhatWeProvideCardTitle = css.raw({
  fontSize: ["1.2rem"],
  fontWeight: "bold",
  color: "secondary.100",
  my: "1rem",
});

export const WhatWeProvideCardText = css.raw({
  color: "secondary.400",
  fontSize: ".9rem",
  mb: "1rem",
});

export const WhatWeProvideCardText2 = css.raw({
  color: "primary.100",
  fontSize: ".8rem",
});
