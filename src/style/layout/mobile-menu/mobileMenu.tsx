import { css } from "../../../../styled-system/css";

export const container = css.raw({
    width: '16rem',
    px: '.5rem',
    pt: '1rem',
    border: '1px solid #ECECEC',
    boxSizing: 'border-box',
    boxShadow: '-3px 3px 4px #ECECEC',
    scrollbarWidth: 'none',
    zIndex: 100,
    h: '10rem',
    bg: 'secondary.500',
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius:'6px',

    '@media screen and (max-width: 319px)': {
        w: '100vw',
    },

})

export const image = css({
    w: 'auto',
    h: '2.5rem',
    mx: 'auto',
    mb: '.5rem'
})

export const optionContainer = css.raw({
    px: '.5rem',
    py: '.8rem',
    w: '100%',
    rounded: '.5rem',
    mb: '.3rem',

    '@media(hover: hover)': {
        _hover: {
            bg: 'primary.400'
        }
    }
}) 

export const icon = css({
    fontSize: '1.5rem',
    color: 'secondary.1200'
})

export const text = css({
    fontSize: '.rem',
    color: 'secondary.1200',
    fontWeight: 'bold'
})