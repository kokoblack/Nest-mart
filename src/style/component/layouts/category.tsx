import { css } from "../../../../styled-system/css";

export const categoryCont = css.raw({
    color: "secondary.100",
    fontSize: "0.875rem",
    w: "20rem",
    fontWeight: "500",
    px: "1.5rem",
    py: ".5rem",
    boxShadow: "1px 1px 6px #ECECEC",
    rounded: "15px",
    border: "1px solid #F2F3F4",

    "& > section:first-child": {
        mt: "1.2rem"
    }
    
})

export const categorySection = css.raw({
    boxSizing: "border-box",
    py: ".6rem",
    px: "1.2rem",
    border: "1px solid #F2F3F4",
    mb: "1rem",
    rounded: "5px"
})

export const categoryNumCount = css.raw({
    rounded: "100%",
    px: ".5rem",
    py: ".1rem",
    bg: "primary.200",
    fontSize: ".8rem",
    ml: "auto"
})