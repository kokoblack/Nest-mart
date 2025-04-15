import { css } from "../../../styled-system/css";

const HeadLineStyle = css.raw({

    '& > h3': {
        fontSize: ["1rem", "1rem", "1.2rem", "1.2rem", "1.5rem"],
        color: 'secondary.100',
        fontWeight: 'bold',
        lineHeight: ["1rem", "1rem", "1.2rem", "1.2rem", "1.5rem"],
    },

    '& > section': {
        my: '1rem'
    },

    '& > section hr:first-child': {
        w: '5rem',
        border: '1px solid #BCE3C9',
    },

    '& > section hr:last-child': {
        border: '.5px solid',
        borderColor: 'secondary.700/20',
    }
})

const Headline = ({title}: {title: string}) => {
  return (
    <section className={css(HeadLineStyle)}>
      <h3>{title}</h3>

      <section>
        <hr />
        <hr />
      </section>
    </section>
  );
};

export default Headline;

