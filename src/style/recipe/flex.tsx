import { cva, type RecipeVariantProps } from "../../../styled-system/css"

export const flex = cva({
    base: {
        display: 'flex',
        h: 'fit-content',
    },
    variants: {
        type: {
            center: {alignItems: 'center', justifyContent: 'center'},
            endY: {alignItems: 'end', justifyContent: 'center'},
            startY: {alignItems: 'start', justifyContent: 'center'},
            endX: {alignItems: 'center', justifyContent: 'end'},
            startX: {alignItems: 'center', justifyContent: 'start'},
            spaceBetween: {alignItems: 'center', justifyContent: 'space-between'},
            spaceAround: {alignItems: 'center', justifyContent: 'space-around'},
            spaceBetweenStart: {alignItems: 'start', justifyContent: 'space-between'},
            spaceEvenlyStart: {alignItems: 'start', justifyContent: 'space-evenly'},
            spaceAroundStart: {alignItems: 'start', justifyContent: 'space-around'},
        },
        rowGap: {
            sm: {rowGap: '.5rem'},
            md: {rowGap: '1rem'}
        },
        columnGap: {
            xsm: {columnGap: '.3rem'},
            sm: {columnGap: '.5rem'},
            md: {columnGap: '.7rem'},
            lg: {columnGap: '1rem'},
            xlg: {columnGap: '1.5rem'}
        },
        gap: {
            xsm: {gap: '.3rem'},
            sm: {gap: '.5rem'},
            md: {gap: '.7rem'},
            lg: {gap: '1rem'},
            xlg: {gap: '1.5rem'}
        },
        vertical: {
            vertical: {flexDirection: 'column'}
        },
        horizontal: {
            horizontal: {flexDirection: 'row'}
        },
        wrap: {
            yes: {flexWrap: 'wrap'},
            no: {flexWrap: 'nowrap'}
        }
    },
    defaultVariants: {
        type: 'center'
    }
})

export type FlexVariants = RecipeVariantProps<typeof flex>