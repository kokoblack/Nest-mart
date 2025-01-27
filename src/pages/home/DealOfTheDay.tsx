import DealOfThDayCard from "../../components/home/DealOfThDayCard";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { DealOfTheDayFirstCont, DealOfTheDaySecondCont, DealOfTheDayThirdCont } from "../../style/pages/home/DealOfTheDay";
import { MdKeyboardArrowRight } from "react-icons/md";
import DealOfTheDayProduct from "../../components/home/DealOfTheDayProduct";
import { DOTDProduct, recentlyAdded, topRated, topSelling, trendingProducts } from "../../data/product";

const DealOfTheDay = () => {
  return (
    <section className={css({mb: '3rem'})}>
      <section
        className={css(flex.raw({ type: "endY" }), DealOfTheDayFirstCont)}
      >
        <h3>Deal Of The Day</h3>
        <div className={css(flex.raw({ columnGap: "xsm" }), {cursor: 'pointer'})}>
          <p>All Deals</p>
          <span>
            <MdKeyboardArrowRight/>
          </span>
        </div>
      </section>

      <section className={css(flex.raw({columnGap: 'md',}), DealOfTheDaySecondCont)}>
        {DOTDProduct.map((data) => (<DealOfThDayCard key={data.id} {...data}/>))}
      </section>

      <section className={css(flex.raw({gap: 'lg',  wrap: 'yes'}), DealOfTheDayThirdCont)}>
        <DealOfTheDayProduct title="Top Selling" product={topSelling}/>
        <DealOfTheDayProduct title="Trending Products" product={trendingProducts}/>
        <DealOfTheDayProduct title="Recently Added" product={recentlyAdded}/>
        <DealOfTheDayProduct title="Top Rated" product={topRated}/>
      </section>
    </section>
  );
};

export default DealOfTheDay;
