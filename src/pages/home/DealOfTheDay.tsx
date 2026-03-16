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
import { useNavigate } from "react-router";

const DealOfTheDay = () => {
  const navigate = useNavigate();

  return (
    <section className={css({ mb: "3rem" })}>
      <section
        className={css(
          flex.raw({ type: "endY", columnGap: "md" }),
          DealOfTheDayFirstCont,
        )}
      >
        <h3>Deal Of The Day</h3>
        <p
          onClick={() => navigate("shop")}
          className={css({
            cursor: "pointer",
            ml: "auto",
            color: "secondary.700",
            fontSize: ".8rem",
          })}
        >
          All Deals
        </p>
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
          DealOfTheDayThirdCont,
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
