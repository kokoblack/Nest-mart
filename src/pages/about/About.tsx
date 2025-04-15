import WelcomeToNest from "./WelcomeToNest";
import { css } from "../../../styled-system/css";
import { aboutCont } from "../../style/pages/about/about";
import WhatWeProvide from "./WhatWeProvide";
import OurPerformance from "./OurPerformance";
import OurTeam from "./OurTeam";
import Banner from "../../components/global/Banner";

const About = () => {
  return (
    <main className={css(aboutCont)}>
      <WelcomeToNest />
      <WhatWeProvide />
      <OurPerformance />
      <OurTeam />

      <section className={css({ pt: ['2rem', '2rem', '2rem', '4rem'], pb: ['0rem', '0rem', '0rem', '2rem']})}>
        <Banner id={0} />
      </section>
    </main>
  );
};

export default About;
