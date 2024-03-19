import { css } from "../../../styled-system/css";

export const productContainer = css.raw({
  w: "100%",
  boxSizing: "border-box",
  color: "secondary.100",
  fontSize: ["1.7rem", "1.7rem", "1.7rem", "1.9rem", "1.9rem"],
  fontWeight: "bold",
});

export const productSecondSection = css.raw({
    display: 'grid', 
    w: '100%',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    justifyItems: 'center',
    gridColumnGap: '.8rem',
    gridRowGap: '2rem'
});
