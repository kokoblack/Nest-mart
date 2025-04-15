import { css } from "../../../../styled-system/css";

export const selectorCont = css.raw({
  position: "relative",
  cursor: "pointer",
  color: "#687188",
  fontWeight: "500",
  userSelect: "none",
  display: "block",
  pl: "28px",
  mb: "8px",
  fontSize: "1rem",
});

export const selectorBox = css.raw({
  position: "absolute",
  top: "2px",
  left: 0,
  w: "20px",
  h: "20px",
  border: "2px solid #CED4DA",
  rounded: "5px",

  _after: {
    content: '""',
    position: "absolute",
    display: "none",

    left: "5px",
    top: "0px",
    w: "7px",
    h: "14px",
    border: "solid #fff",
    borderWidth: "0px 3px 3px 0px",
    rotate: "45deg",
  },
  

  _peerChecked :  {
    bgColor: "primary.100",
    borderColor: "primary.100",

    _after: {
      display: "block",
    },
  },
});

export const selectorInput = css.raw({
  position: "absolute",
  opacity: 0,
  cursor: "pointer",
  h: "0",
  w: "0",
});
