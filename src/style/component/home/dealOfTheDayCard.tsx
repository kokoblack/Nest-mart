import { css } from "../../../../styled-system/css";

export const dealOfTheDayCardCont = css.raw({
    bgImage: "url(assets/banner-8.png)",
    bgPosition: 'center',
    bgSize: 'cover',
    py: "6rem",
    px: "2rem",
    position: 'relative',
    w: 'fit-content',
    rounded: '15px',

    "@media screen and (max-width: 767px)": {
        px: "1rem",
        py: '4rem'
      },
})

export const dealOfTheDayCardFirstSection = css.raw({
    fontWeight: '600',

    '& div': {
        textAlign: 'center',
        bgColor: "secondary.500",
        px: '.2rem',
        py: '.5rem',
        rounded: '4px',
    },

    '& div p:first-child': {
        fontSize: [".9rem"],
        lineHeight: ['1.1rem'],
        color: 'primary.100'
    },

    '& div p:last-child': {
        fontSize: [".9rem"],
        lineHeight: ['1.1rem'],
        color: 'secondary.700'
    }
})

export const dealOfTheDayCardSecondSection = css.raw({
    position: 'absolute',
    bottom: '-6rem',
    left: '9%',
    // x: '-50%',
    bgColor: 'secondary.500',
    w: '13rem',
    px: '1rem',
    py: "1.6rem",
    rounded: '10px',
    boxShadow: '2px 4px 6px #B6B6B6',

    "@media screen and (max-width: 767px)": {
        bottom: '-6rem',
        left: '3%',
        py: '.8rem'
      },
})