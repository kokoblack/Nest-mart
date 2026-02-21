import { css } from "../../../styled-system/css";
import {
  selectorBox,
  selectorCont,
  selectorInput,
} from "../../style/component/layouts/selector";

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
        <label htmlFor={value.id} className={css(selectorCont)} key={index}>
          {value.value}
          <input
            className={[css(selectorInput), "peer"].join(" ")}
            type="radio"
            name={title}
            id={value.id}
          />
          <span className={css(selectorBox)}></span>
        </label>
      ))}
    </fieldset>
  );
};

export default Selector;
