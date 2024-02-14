import { css } from "../../../styled-system/css";

export const container = css.raw({
    w: '30%',
    bg: 'secondary.1100',
    rounded: '5rem'
})

export const searchIcon = css({
    color: 'secondary.1000',
    ml: '1rem'
})

export const input = css({
    fontFamily: 'quicksand',
    // fontSize: '.625rem',
    bg: 'transparent',

    _focus: {
        outline: 'none',
        border: 'none'
    }
})

export const button = css({
    bg: 'primary.100',
    color: 'secondary.500',
    py: '1rem',
    px: '2rem',
    rounded: '3rem'
})