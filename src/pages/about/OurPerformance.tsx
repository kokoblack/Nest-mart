import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import aboutImg from "../../assets/about-5.png";
import {
  ourPerformanceArticleCont,
  ourPerformanceBanner,
  ourPerformanceBannerTextCont,
  ourPerformanceCont,
  ourPerformanceContent,
  ourPerformanceFirstSection,
  ourPerformanceMainImg,
  ourPerformanceSecondSection,
} from "../../style/pages/about/ourPerformance";

const OurPerformance = () => {
  return (
    <section className={css(ourPerformanceCont)}>
      <section
        className={css(flex.raw({ gap: "xlg" }), ourPerformanceFirstSection)}
      >
        <figure className={css(ourPerformanceMainImg)}>
          <img src={aboutImg} alt="about image" />
        </figure>

        <div className={css(ourPerformanceContent)}>
          <p>Our performance</p>
          <article>
            <h3>Your Partner for e- commerce grocery solution</h3>
            <p className={css({ mb: "1rem" })}>
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </p>
            <p>
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia
            </p>
          </article>
        </div>
      </section>

      <section
        className={css(
          flex.raw({ gap: "xlg", type: "spaceBetween" }),
          ourPerformanceSecondSection
        )}
      >
        <article className={css(ourPerformanceArticleCont)}>
          <h3>Who we are</h3>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </article>

        <article className={css(ourPerformanceArticleCont)}>
          <h3>Our history</h3>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </article>

        <article className={css(ourPerformanceArticleCont)}>
          <h3>Our mission</h3>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </article>
      </section>

      <section
        className={css(
          flex.raw({ type: "spaceAround", columnGap: 'xlg', rowGap: 'xxl', wrap: 'yes' }),
          ourPerformanceBanner,
          {
            bgImage: "url(assets/Main5.png)",
          }
        )}
      >
        <div className={css(ourPerformanceBannerTextCont)}>
          <p>5+</p>
          <p>Glorious years</p>
        </div>

        <div className={css(ourPerformanceBannerTextCont)}>
          <p>10000+</p>
          <p>Happy clients</p>
        </div>

        <div className={css(ourPerformanceBannerTextCont)}>
          <p>10000+</p>
          <p>Projects complete</p>
        </div>

        <div className={css(ourPerformanceBannerTextCont)}>
          <p>3000+</p>
          <p>Team advisor</p>
        </div>

        <div className={css(ourPerformanceBannerTextCont)}>
          <p>90000+</p>
          <p>Products Sale</p>
        </div>
      </section>
    </section>
  );
};

export default OurPerformance;
