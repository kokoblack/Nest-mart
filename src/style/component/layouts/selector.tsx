import { css } from "../../../../styled-system/css";

export const selectorCont = css.raw({
  position: "relative",
  cursor: "pointer",
  color: "#687188",
  fontWeight: "500",
  userSelect: 'none',
});

export const selectorBox = css.raw({
  position: "absolute",
  left: 0,
  right: 0,
  w: "18px",
  h: "18px",
  border: "2px solid #CED4DA",
  rounded: "2px",

  "&:after": {
    content: "",
    position: "absolute",
    display: "none"
  }
});

export const selectorInput = css.raw({
  position: "absolute",
  opacity: 0,
  cursor: "pointer",
  h: "0",
  w: "0",

  "& input:checked ": {
    position: "relative",
    left: 0,
    right: 0,
    w: "20px",
    h: "20px",
    border: "1px solid #CED4DA",
    rounded: "2px",
    bgColor: "primary.100",
    borderColor: "primary.100",
  },

  "& input:checked:after": {
    position: "relative",
    left: 0,
    right: 0,
    w: "20px",
    h: "20px",
    border: "1px solid #CED4DA",
    rounded: "2px",
    bgColor: "primary.100",
    borderColor: "primary.100",
    display: "block"
  }

});
