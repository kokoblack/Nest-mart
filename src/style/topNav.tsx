import { css } from "../../styled-system/css";

export const navContainer = css({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    py: '2rem',
    px: '3rem',
    columnGap: '2%',
    w: '100%',
})

export const hr = css({
    rotate: '180dg',
    color: '#7E7E7E',
    borderWidth: '.5px',
    height: '1.3rem'
})

export const navSearchContainer = css.raw({
    py: '.8rem',
    px: '1rem',
    border: '2px solid #BCE3C9',
    w: '35%',
    borderRadius: '4px',
    alignSelf: "center"
})

export const navInput = css({
    w: '40%',
    fontSize: '.8rem',
    fontFamily: 'lato',

    _placeholder: {
        color: 'secondary.600',
        fontSize: '.8rem',
        fontFamily: 'lato'
    },

    _focus: {
        border: 'none',
        outline: 'none'
    }
})

export const navLocationCont = css.raw({
    border: '1px solid #ECECEC',
    alignSelf: 'center',
    p: '.3rem',
    rounded: '4px',
    boxShadow: '2px 2px 4px #ECECEC'

})

export const navUserCont = css.raw({
    alignSelf: 'center'
})