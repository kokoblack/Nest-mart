import { css } from "../../../styled-system/css";

export const container = css.raw({
    width: '15rem',
    px: '.5rem',
    pt: '1rem',
    border: '1px solid #ECECEC',
    boxSizing: 'border-box',
    boxShadow: '-3px 3px 4px #ECECEC',
    scrollbarWidth: 'none',
    zIndex: 100,
    h: '10rem',
    // overflow: 'scroll',
    bg: 'secondary.500',
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius:'6px',
    // position: 'absolute',
    // overflow

    // '&::-webkit-scrollbar': {
    //     display: 'none'
    // }

})

export const image = css({
    w: 'auto',
    h: '2.5rem',
    m: '0 auto',
    mb: '.5rem'
})

export const optionContainer = css.raw({
    px: '.5rem',
    py: '.8rem',
    // bg: 'primary.400',
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