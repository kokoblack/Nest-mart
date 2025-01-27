import { css } from "../../../../styled-system/css";

export const container = css.raw({
    w: '100%',
    bg: 'secondary.1100',
    rounded: '5rem',
    boxSizing: 'border-box',
    borderBottom: "1px solid #dedfe2",
    py: ".8rem",
    px: "1rem",
})

export const searchIcon = css({
    color: 'secondary.1000',
    ml: '.5rem',
    fontSize: '1.1rem'
})

export const input = css({
    fontFamily: 'quicksand',
    fontSize: '.8rem',
    bg: 'transparent',
    w: '45%',

    _focus: {
        outline: 'none',
        border: 'none'
    },

    _placeholder: {
        fontSize: ".9rem"
    }
})