import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import FeaturedSmallCards from "../../components/home/FeaturedSmallCards";
import FeaturedBigCard from "../../components/home/FeaturedBigCard";
import { data } from "../../data/featuredSmallCard";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import {
  featureUlCont,
  featuredContainer,
  featuredFirstSection,
  featuredIcon,
  featuredIconCont,
  featuredSecondSection,
  featuredThirdSection,
} from "../../style/home/feaured";
import { useState } from "react";

const FeaturedCategories = () => {
  const [active, setActive] = useState(0);

  const link = ["Cake & Milk", "Coffes & Teas", "Pet Foods", "Vegetables"];
  const title = [
    "Everyday Fresh & Clean with Our Products",
    "Make your Breakfast Healthy and Easy",
    "The best Organic Products Online",
  ];
  return (
    <section className={css(featuredContainer)}>
      <section
        className={css(
          flex.raw({ columnGap: "xlg", type: "endY" }),
          featuredFirstSection
        )}
      >
        <h3 className={css({ fontWeight: "bold", lineHeight: "2rem" })}>
          Featured Categories
        </h3>
        <nav>
          <ul className={css(flex.raw({ columnGap: "md" }), featureUlCont)}>
            {link.map((data, index) => (
              <li
                onClick={() => setActive(index)}
                key={index}
                className={css({
                  color: active === index ? "primary.100" : "null",
                  cursor: "pointer",
                  flexShrink: "0",
                })}
              >
                {data}
              </li>
            ))}
          </ul>
        </nav>
        <div className={css(flex.raw({ columnGap: "sm" }), featuredIconCont)}>
          <span className={css(featuredIcon)}>
            <TiArrowLeft />
          </span>
          <span className={css(featuredIcon)}>
            <TiArrowRight />
          </span>
        </div>
      </section>

      <section
        className={css(
          flex.raw({ columnGap: "md", wrap: "no" }),
          featuredSecondSection
        )}
      >
        {data.map((item, index) => (
          <FeaturedSmallCards key={index} {...item} />
        ))}
      </section>

      <section
        className={css(flex.raw({ columnGap: "md" }), featuredThirdSection)}
      >
        <FeaturedBigCard title={title[0]} num={1} />
        <FeaturedBigCard title={title[1]} num={2} />
        <FeaturedBigCard title={title[2]} num={3} />
      </section>
    </section>
  );
};

export default FeaturedCategories;
