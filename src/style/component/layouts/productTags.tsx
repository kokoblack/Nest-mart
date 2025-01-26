import { css } from "../../../../styled-system/css";

export const productTag = css.raw({
    w: "fit-content",
    px: ".8rem",
    py: ".4rem",
    bgColor: "white",
    rounded: "3rem",
    boxShadow: "1px 1px 8px 2px #ededed",
  
    "& > span": {
      color: "secondary.400",
      fontSize: "1rem",
    },
  
    "& > p": {
      fontSize: "1rem",
      color: "primary.100",
      fontWeight: "600",
    },
  });