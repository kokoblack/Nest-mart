import { cva, type RecipeVariantProps } from "../../../styled-system/css";

export const button = cva({
  base: {
    display: "flex",
    alignItems: "center",
  },
  variants: {
    bg: {
      green: { bg: "primary.100" },
      lightGreen: { bg: "primary.400" },
    },
    color: {
      white: { color: "secondary.500" },
      green: { color: "primary.100" },
    },
    radius: {
      sm: { rounded: "4px" },
      mg: { rounded: "6px" },
      lg: { rounded: "3rem" },
    },
    columnGap: {
      xsm: { columnGap: ".3rem" },
      sm: { columnGap: ".5rem" },
      md: { columnGap: ".7rem" },
    },
    py: {
      sm: { py: ".5rem" },
      md: { py: ".7rem" },
      lg: { py: "1rem" },
      xl: { py: "2rem" },
    },
    px: {
      sm: { px: ".5rem" },
      md: { px: ".7rem" },
      lg: { px: "1rem" },
      xl: { px: "2rem" },
    },
    move: {
      left: { justifyContent: "start" },
      right: { justifyContent: "end" },
    },
    font: {
        quicksand: {fontFamily: 'quicksand'},
        lato: {fontFamily: 'lato'}
    },
    fontSize: {
        xsm: {fontSize: '.5rem'},
        sm: {fontSize: '.7rem'},
        md: {fontSize: '.825rem'},
        lg: {fontSize: '1rem'},
    }
  },
  defaultVariants: {
    bg: "green",
    color: "white",
    columnGap: "sm",
    px: "lg",
    py: "lg",
    font: 'quicksand',
    fontSize: 'sm',
    radius: 'sm'
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
