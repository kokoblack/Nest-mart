import { SiMinutemailer } from "react-icons/si";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import {
  container,
  input,
  icon,
  subscribeButton,
} from "../../style/component/global/subscribe";
import { button } from "../../style/recipe/button";
import { forwardRef } from "react";

type Ref = HTMLInputElement;
 
type SubscribeProps = {
  setFocused: React.Dispatch<React.SetStateAction<boolean>>
};
const Subscribe = forwardRef<Ref, SubscribeProps>(({ setFocused }, ref) => {
  return (
    <div
      className={css(
        flex.raw({ columnGap: "lg", type: "spaceBetween" }),
        container
      )}
    >
      <span className={icon}>
        <SiMinutemailer />
      </span>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={ref}
        placeholder="Email address"
        className={input}
      />
      <button
        className={css(
          button.raw({ radius: "lg", py: "lg", px: "xl", fontSize: "lg" }),
          subscribeButton
        )}
      >
        Subscribe
      </button>
    </div>
  );
});

export default Subscribe;
