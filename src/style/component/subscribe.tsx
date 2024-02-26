import { css } from "../../../styled-system/css";

export const container = css.raw({
    w: '25rem',
    bg: 'secondary.500',
    rounded: '5rem',
    boxSizing: 'border-box',
})

export const icon = css({
    color: 'secondary.600',
    ml: '1rem',
    fontSize: '1.5rem'
})

export const input = css({
    fontFamily: 'quicksand',
    fontSize: '1rem',
    bg: 'transparent',
    mr: 'auto',

    _focus: {
        outline: 'none',
        border: 'none'
    }, 

    _placeholder: {
        color: "secondary.600"
    }
})