import { aboutImg1, aboutImg2, aboutImg3, aboutImg4 } from ".";
import { css } from "../../../styled-system/css";
import {
  welcomeToNestCont,
  welcomeToNestContent,
  welcomeToNestContentImgCont,
  welcomeToNestMainImg,
} from "../../style/pages/about/welcomeToNest";
import { flex } from "../../style/recipe/flex";

const WelcomeToNest = () => {
  return (
    <section className={css(flex.raw({ gap: "xlg" }), welcomeToNestCont)}>
      <figure className={css(welcomeToNestMainImg)}>
        <img src={aboutImg1} alt="about image" />
      </figure>

      <div className={css(welcomeToNestContent)}>
        <article>
          <h3>Welcome to Nest</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p>
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
        </article>

        <div
          className={css(
            flex.raw({ gap: "md", type: "spaceAroundStart" }),
            welcomeToNestContentImgCont
          )}
        >
          <figure>
            <img src={aboutImg2} alt="about image" />
          </figure>

          <figure>
            <img src={aboutImg3} alt="about image" />
          </figure>

          <figure>
            <img src={aboutImg4} alt="about image" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WelcomeToNest;
