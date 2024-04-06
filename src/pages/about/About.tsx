import WelcomeToNest from "./WelcomeToNest";
import { css } from "../../../styled-system/css";
import { aboutCont } from "../../style/pages/about/about";
import WhatWeProvide from "./WhatWeProvide";

const About = () => {
  return (
    <main className={css(aboutCont)}>
      <WelcomeToNest />
      <WhatWeProvide />
    </main>
  );
};

export default About;
