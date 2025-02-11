import { css } from "../../../../styled-system/css";

export const container = css.raw({
    width: '18rem',
    px: '.5rem',
    pt: '1rem',
    border: '1px solid #ECECEC',
    boxSizing: 'border-box',
    boxShadow: '-3px 3px 4px #ECECEC',
    zIndex: 100,
    h: 'fit-content',
    bg: 'secondary.500',
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius:'6px',
    // overflow: "scroll",
    // scrollbar: "hidden",

    '@media screen and (max-width: 359px)': {
        pt: '.9rem',
        w: "100%"
    },

})

export const image = css({
    w: '9rem',
    h: 'auto',
    mx: 'auto',
    mb: '1rem',

    '@media screen and (max-width: 359px)': {
        w: '8rem',
    },

})

export const optionContainer = css.raw({
    px: '.5rem',
    py: '.8rem',
    w: '100%',
    rounded: '.5rem',
    mb: '.5rem',

    // '@media(hover: hover)': {
    //     _hover: {
    //         bg: 'primary.400'
    //     }
    // }
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