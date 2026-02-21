import { css } from "../../../../styled-system/css";

export const desktopCartListTableCont = css.raw({
  textAlign: "center",
  mt: "2rem",
  w: "fit-content",

  "& > tr": {
    border: "2px solid #ECECEC",
  },

  "& tr > th": {
    py: "1rem",
    px: "1rem",
    color: "secondary.100",
    fontSize: ".8rem",
    fontFamily: "quicksand",
    bg: "secondary.800",
    textAlign: "left",
  },

  "& tr > td": {
    px: "1rem",
    py: "1rem",
    textAlign: "left",
  },
});

export const desktopCartListProductCont = css.raw({
  columnGap: "2rem",
  textAlign: "left",

  "& p": {
    fontSize: ".75rem",
  },

  "& i": {
    fontSize: ".75rem",
  },
});

export const desktopCartListImg = css.raw({
  w: "80px",
  objectFit: "contain",
  flexShrink: "0",

  "& > img": {
    border: "1px solid #ECECEC",
    rounded: "15px",
  },
});

export const desktopCartListPrice = css.raw({
  fontSize: "1rem",
});

export const desktopCartListSubTotal = css.raw({
  fontSize: "1rem",
  color: "primary.100",
});
