import { SiMinutemailer } from "react-icons/si";
import { flex } from "../style/recipe/flex";
import { css } from "../../styled-system/css";
import { container, input, icon, subscribeButton } from "../style/component/subscribe";
import { button } from "../style/recipe/button";
import { forwardRef } from "react";

type Ref = HTMLInputElement
const Subscribe = forwardRef<Ref>((props, ref) => {
  return (
    <div className={css(flex.raw({columnGap: 'lg', type: 'spaceBetween'}), container)}>
        <span className={icon}><SiMinutemailer/></span>
        <input ref={ref} placeholder="Email address" className={input}/>
        <button className={css(button.raw({radius: 'lg', py: 'lg', px: 'xl', fontSize: 'lg'}), subscribeButton)}>Subscribe</button>
    </div>
  )
})

export default Subscribe