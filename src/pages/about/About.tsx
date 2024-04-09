import WelcomeToNest from "./WelcomeToNest";
import { css } from "../../../styled-system/css";
import { aboutCont } from "../../style/pages/about/about";
import WhatWeProvide from "./WhatWeProvide";
import OurPerformance from "./OurPerformance";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <main className={css(aboutCont)}>
      <WelcomeToNest />
      <WhatWeProvide />
      <OurPerformance />
      <OurTeam />
    </main>
  );
};

export default About;
