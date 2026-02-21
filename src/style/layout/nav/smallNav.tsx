import { css } from "../../../../styled-system/css";

export const container = css.raw({
    py: '1rem',
    w: '100%',
    borderBottom: '1px solid #dedfe2',
    color: 'secondary.100',
    fontSize: '.875rem',
    fontWeight: 'bold',

    '@media screen and (max-width: 1129px)': {
        justifyContent: 'start'
    },

    '@media screen and (max-width: 992px)': {
        display: 'none'
    }
})