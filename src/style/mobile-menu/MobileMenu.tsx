import { css } from "../../../styled-system/css";

export const container = css.raw({
    width: '15rem',
    p: '.4rem',
    border: '1px solid #ECECEC',
    boxSizing: 'border-box',
    ml: '1rem',
    boxShadow: '2px 2px 4px #ECECEC',
    maxH: 'screen',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    zIndex: 100,
    // position: 'absolute',
    // overflow

    '&::-webkit-scrollbar': {
        display: 'none'
    }

})

export const image = css({
    w: 'auto',
    h: '2.2rem',
    m: '0 auto'
})

export const optionContainer = css.raw({
    px: '.5rem',
    py: '.8rem',
    bg: 'primary.400',
    w: '100%',
    rounded: '.5rem',
    mb: '.3rem'
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