import Hero from "./Hero";
import { css } from "../../../styled-system/css";
import FeaturedCategories from "./FeaturedCategories";
import PopularProduct from "./PopularProduct";
import DailyBestSells from "./DailyBestSells";
import DealOfThDayCard from "../../components/home/DealOfThDayCard";
import DealOfTheDay from "./DealOfTheDay";
import Banner from "../../components/global/Banner";
import FeaturedBigCard from "../../components/home/FeaturedBigCard";
import { flex } from "../../style/recipe/flex";

const Home = () => {
  const title = [
    "Everyday Fresh & Clean with Our Products",
    "Make your Breakfast Healthy and Easy",
    "The best Organic Products Online",
  ];

  const style = css.raw({
    "@media screen and (max-width: 991px)": {
      display: "none",
    },
  });

  const style2 = css.raw({
    overflowX: "scroll",
          justifyContent: "flex-start",
          scrollbar: "hidden",
          mb: "3rem",
  })

  const style3 = css.raw({
    "@media screen and (min-width: 991px)": {
      display: "none",
    },
  });

  return (
    <main className={css({ boxSizing: "border-box", w: "100%" })}>
      <Hero />

      <section className={css(style)}>
        <FeaturedCategories />
      </section>

      <section
        className={css(flex.raw({ columnGap: "md" }), style2)}
      >
        <FeaturedBigCard title={title[0]} num={1} />
        <FeaturedBigCard title={title[1]} num={2} />
        <FeaturedBigCard title={title[2]} num={3} />
      </section>

      <PopularProduct />
      <DailyBestSells />
      <DealOfTheDay />

      <section className={css(style3)}>
        <FeaturedCategories />
      </section>

      <Banner id={1} />
    </main>
  );
};

export default Home;
