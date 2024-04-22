import { css } from "../../../styled-system/css";
import OurTeamCard from "../../components/about/OurTeamCard";
import {
  ourTeamArticleCont,
  ourTeamCont,
  ourTeamContentCont,
  ourTeamFirstSection,
  ourTeamSecondSection,
  ourTeamTxt,
} from "../../style/pages/about/ourTeam";
import { button } from "../../style/recipe/button";
import { flex } from "../../style/recipe/flex";
import img from "../../assets/Main.png";
import img1 from "../../assets/Main2.png";
import banner from "../../assets/section5.png";
import Banner from "../../components/global/Banner";

const OurTeam = () => {
  return (
    <section className={css(ourTeamCont)}>
      <h3>Our Team</h3>

      <section className={css(flex.raw({ gap: "xlg" }), ourTeamContentCont)}>
        <section className={css(ourTeamFirstSection)}>
          <article className={css(ourTeamArticleCont)}>
            <p
              className={css(ourTeamTxt, {
                color: "primary.100",
                fontWeight: "bold",
              })}
            >
              Our Team
            </p>
            <h3>Meet Our Expert Team</h3>
            <p className={css(ourTeamTxt, { mb: "1rem" })}>
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <p className={css(ourTeamTxt)}>
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
          </article>

          <button className={css(button.raw({}))}>View All Members</button>
        </section>

        <section
          className={css(flex.raw({ gap: "xlg" }), ourTeamSecondSection)}
        >
          <OurTeamCard img={img} name="H. Merinda" title="CEO & Co-Founder" />
          <OurTeamCard img={img1} name="Dilan Specter" title="Head Engineer" />
        </section>
      </section>

      <section className={css({pt: '5rem'})}>
        <Banner id={0} />
      </section>
    </section>
  );
};

export default OurTeam;
