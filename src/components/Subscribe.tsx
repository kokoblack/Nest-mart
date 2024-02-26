import { SiMinutemailer } from "react-icons/si";
import { flex } from "../style/recipe/flex";
import { css } from "../../styled-system/css";
import { container, input, icon } from "../style/component/subscribe";
import { button } from "../style/recipe/button";

const Subscribe = () => {
  return (
    <div className={css(flex.raw({columnGap: 'lg', type: 'spaceBetween'}), container)}>
        <span className={icon}><SiMinutemailer/></span>
        <input placeholder="Your email address" className={input}/>
        <button className={button({radius: 'lg', py: 'lg', px: 'xl', fontSize: 'lg'})}>Subscribe</button>
    </div>
  )
}

export default Subscribe