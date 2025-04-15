import DealOfThDayCard from "../../components/home/DealOfThDayCard";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import {
  DealOfTheDayFirstCont,
  DealOfTheDaySecondCont,
  DealOfTheDayThirdCont,
} from "../../style/pages/home/DealOfTheDay";
import DealOfTheDayProduct from "../../components/home/DealOfTheDayProduct";
import {
  DOTDProduct,
  recentlyAdded,
  topRated,
  topSelling,
  trendingProducts,
} from "../../data/product";

const DealOfTheDay = () => {
  return (
    <section className={css({ mb: "3rem" })}>
      <section
        className={css(flex.raw({ type: "endY" }), DealOfTheDayFirstCont)}
      >
        <h3>Deal Of The Day</h3>
        <p className={css({ cursor: "pointer", ml: "auto", color: "secondary.700", fontSize: ".9rem" })}>All Deals</p>
      </section>

      <section
        className={css(flex.raw({ columnGap: "md" }), DealOfTheDaySecondCont)}
      >
        {DOTDProduct.map((data) => (
          <DealOfThDayCard key={data.id} {...data} />
        ))}
      </section>

      <section
        className={css(
          flex.raw({ gap: "lg", wrap: "yes" }),
          DealOfTheDayThirdCont
        )}
      >
        <DealOfTheDayProduct title="Top Selling" product={topSelling} />
        <DealOfTheDayProduct
          title="Trending Products"
          product={trendingProducts}
        />
        <DealOfTheDayProduct title="Recently Added" product={recentlyAdded} />
        <DealOfTheDayProduct title="Top Rated" product={topRated} />
      </section>
    </section>
  );
};

export default DealOfTheDay;
