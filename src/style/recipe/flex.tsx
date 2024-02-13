import { cva, type RecipeVariantProps } from "../../../styled-system/css"

export const flex = cva({
    base: {
        display: 'flex',
        h: 'fit-content',
    },
    variants: {
        type: {
            center: {alignItems: 'center', justifyContent: 'center'},
            end: {alignItems: 'end', justifyContent: 'center'}
        },
        rowGap: {
            sm: {rowGap: '.5rem'},
            md: {rowGap: '1rem'}
        },
        columnGap: {
            xsm: {columnGap: '.3rem'},
            sm: {columnGap: '.5rem'},
            md: {columnGap: '.7rem'}
        }
    },
    defaultVariants: {
        type: 'center'
    }
})

export type FlexVariants = RecipeVariantProps<typeof flex>