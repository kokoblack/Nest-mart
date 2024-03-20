import Hero from "./Hero";
import { css } from "../../../styled-system/css";
import FeaturedCategories from "./FeaturedCategories";
import PopularProduct from "./PopularProduct";
import DailyBestSells from "./DailyBestSells";

const Home = () => {
  return (
    <main className={css({ boxSizing: "border-box", w: "100%" })}>
      <Hero />
      <FeaturedCategories />
      <PopularProduct />
      <DailyBestSells/>
    </main>
  );
};

export default Home;
