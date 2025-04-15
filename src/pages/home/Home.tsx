import Hero from "./Hero";
import { css } from "../../../styled-system/css";
import FeaturedCategories from "./FeaturedCategories";
import PopularProduct from "./PopularProduct";
import DailyBestSells from "./DailyBestSells";
import DealOfTheDay from "./DealOfTheDay";
import Banner from "../../components/global/Banner";
import FeaturedBigCard from "../../components/home/FeaturedBigCard";
import { flex } from "../../style/recipe/flex";
import { homeCont, style2 } from "../../style/pages/home/home";

const Home = () => {
  const title = [
    "Everyday Fresh & Clean with Our Products",
    "Make your Breakfast Healthy and Easy",
    "The best Organic Products Online",
  ];

  return (
    <main className={css(homeCont)}>
      <Hero />
      <FeaturedCategories />

      <section className={css(flex.raw({ columnGap: "md", type: "spaceBetween" }), style2)}>
        <FeaturedBigCard title={title[0]} num={1} />
        <FeaturedBigCard title={title[1]} num={2} />
        <FeaturedBigCard title={title[2]} num={3} />
      </section>

      <PopularProduct />
      <DailyBestSells />
      <DealOfTheDay />

      <Banner id={1} />
    </main>
  );
};

export default Home;
