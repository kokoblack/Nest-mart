import Hero from "./Hero";
import { css } from "../../../styled-system/css";
import FeaturedCategories from "./FeaturedCategories";
import PopularProduct from "./PopularProduct";
import DailyBestSells from "./DailyBestSells";
import DealOfThDayCard from "../../components/home/DealOfThDayCard";
import DealOfTheDay from "./DealOfTheDay";
import Banner from "../../components/global/Banner";

const Home = () => {
  return (
    <main className={css({ boxSizing: "border-box", w: "100%" })}>
      <Hero />
      <FeaturedCategories />
      <PopularProduct />
      <DailyBestSells/>
      <DealOfTheDay/>
      <Banner id={1}/>
    </main>
  );
};

export default Home;
