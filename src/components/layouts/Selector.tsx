import { css } from "../../../styled-system/css";
import "../../style/component/layouts/customeInput.css";

const Selector = ({
  value,
  title,
}: {
  value: { value: string; id: string }[];
  title: string;
}) => {
  return (
    <fieldset className={css({ mt: "1rem", fontSize: "1rem" })}>
      <legend
        className={css({
          color: "secondary.400",
          fontWeight: "800",
          mb: ".5rem",
        })}
      >
        {title}
      </legend>

      {value.map((value, index) => (
        <label htmlFor={value.id} className="container" key={index}>
          {value.value}
          <input className="" type="radio" name={title} id={value.id} />
          <span className="checkmark"></span>
        </label>
      ))}
    </fieldset>
  );
};

export default Selector;
