import { css } from "../../../../styled-system/css";

export const prodDetailCont = css.raw({
  position: "relative",
  w: "100%",
  boxSizing: "border-box",
});

export const prodDetailContent = css.raw({
  mt: "2rem",
  columnGap: "2rem",

  "@media screen and (max-width: 480px)": {
    mt: "1rem"
  }
})

export const prodDetailMenuButton = css.raw({
  display: "none",
  position: "fixed",
  bottom: "0",
  right: "0",
  w: "100%",
  border: "1px solid",
  borderBottomColor: "#ECECEC",
  borderTopColor: "#ECECEC",
  borderLeftColor: "white",
  borderRightColor: "white",
  py: ".5rem",
  bg: "white",

  "@media screen and (max-width: 480px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: ".6rem",
  },
});
