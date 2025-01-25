import Headline from "../global/Headline";
import { Article3, Article4, Article5, Article6, Article1, Article2 } from ".";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { SidebarCardCont } from "../../style/global";

const Gallary = () => {
  const img = [Article3, Article4, Article5, Article6, Article1, Article2];
  return (
    <section className={css(SidebarCardCont)}>
      <Headline title="Gallery" />

      <section className={css(flex.raw({ columnGap: "md", wrap: "yes", type: "spaceBetween", rowGap: "md" }), { py: ".6rem", })}>
        {img.map((img, index) => (
          <figure key={index} >
            <img src={img} className={css({ h: "auto", w: "5.15rem", rounded: "5px" })}/>
          </figure>
        ))}
      </section>
    </section>
  );
};

export default Gallary;
