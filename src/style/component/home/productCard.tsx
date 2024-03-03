import { css } from "../../../../styled-system/css";

export const productCardContainer = css.raw({
    w: ['15rem'],
    p: ['.8rem'],
    rounded: '15px',
    bg: 'secondary.500',
    border: '1px solid #ECECEC',
    fontSize: '.8rem',
    color: 'secondary.700',
    position: 'relative'
})

export const productCardImg = css.raw({
    w: ['10rem', '10rem','13rem'],
    h: ['10rem', '10rem', '13rem'],
    mx: 'auto'
})

export const productCardSpecial = css.raw({
    position: 'absolute',
    top: '0',
    left: '0',
    borderTopLeftRadius: '.9rem',
    borderBottomRightRadius: '.9rem',
    fontSize: '.6rem',
    px: '1rem',
    py: '.4rem',
    color: 'secondary.500',
    fontFamily: 'lato'
})