import { css } from "../../../../styled-system/css";

export const locationCont = css.raw({
    mt: "2rem",
})

export const locationSecondSection = css.raw({
    m: "3rem 0 .5rem 0",
    px: "5rem",
    columnGap: "10%",

    "@media (max-width: 1024px)": {
        px: "3rem",
        columnGap: "5%",
    },

    "@media (max-width: 535px)": {
        flexDirection: "column",
        alignItems: "start",
    },

    "@media (max-width: 425px)": {
        px: "1.5rem",
    },

    "@media (max-width: 320px)": {
        px: "1rem",
    }
})

export const locationSecondSectionContent = css.raw({
    mb: "2rem",

   "& > h2": {
        fontSize: "1.3rem",
    fontWeight: "bold",
    color: "primary.100",
    mb: [".8rem"],
    },

    "& > p": {
    fontSize: ".9rem",
    mb: [".3rem"],
    color: "secondary.400",
    fontFamily: "lato",
  },

//   "@media (max-width: 535px)": {

//     "& > button": {
//         py: ".4rem",
//     },
// }

})
