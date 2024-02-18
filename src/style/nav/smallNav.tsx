import { css } from "../../../styled-system/css";

export const container = css.raw({
    py: '1rem',
    px: '3rem',
    w: '100%',
    borderBottom: '1px solid #dedfe2',
    color: 'secondary.100',
    fontSize: '.825rem',
    fontWeight: 'bold',

    '@media screen and (max-width: 1129px)': {
        justifyContent: 'start'
    },

    '@media screen and (max-width: 992px)': {
        display: 'none'
    }
})

export const supportContainer = css.raw({
    '@media screen and (max-width: 1129px)': {
        display: 'none'
    }
})