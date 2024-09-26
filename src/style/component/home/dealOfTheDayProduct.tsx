import { css } from "../../../../styled-system/css";

export const DealOfTheDayProductCont = css.raw({
    w: 'fit-content',

    '& > h3': {
        fontSize: ["1rem", "1rem", "1.2rem", "1.2rem", "1.5rem"],
        color: 'secondary.100',
        fontWeight: 'bold',
        lineHeight: ["1rem", "1rem", "1.2rem", "1.2rem", "1.5rem"],
    },

    '& > div': {
        my: '1rem'
    },

    '& > div hr:first-child': {
        w: '5rem',
        border: '1px solid #BCE3C9',
    },

    '& > div hr:last-child': {
        border: '.5px solid',
        borderColor: 'secondary.700/20'
    }
})