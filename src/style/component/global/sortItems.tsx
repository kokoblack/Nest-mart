import { css } from "../../../../styled-system/css";

export const sortContainer = css.raw({
  display: "flex",
  px: ".8rem",
  py: ".8rem",
  border: "1px solid #ECECEC",
  rounded: "10px",
  fontSize: ".8rem",
  color: 'secondary.600',
  fontWeight: "500",
  w: "fit-content",
  cursor: "pointer"
});

// export const searchInput = css.raw({
//   color: "secondary.600",
//   fontWeight: "500",
//   fontSize: ".9rem",
//   w: "90%",
//   outline: 'none',
  
//   _placeholder: {
//     color: "secondary.600"
//   }
// });

export const sortIcon = css.raw({
  fontSize: "1.2rem",
});