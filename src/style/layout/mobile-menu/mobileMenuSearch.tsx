import { css } from "../../../../styled-system/css";

export const container = css.raw({
    w: '100%',
    bg: 'secondary.1100',
    rounded: '5rem',
    boxSizing: 'border-box'
})

export const searchIcon = css({
    color: 'secondary.1000',
    ml: '.5rem',
    fontSize: '.9rem'
})

export const input = css({
    fontFamily: 'quicksand',
    fontSize: '.8rem',
    bg: 'transparent',
    w: '45%',

    _focus: {
        outline: 'none',
        border: 'none'
    }
})

export const button = css({
    bg: 'primary.100',
    color: 'secondary.500',
    py: '.5rem',
    px: '1rem',
    rounded: '3rem',
    fontSize: '.7rem'
})