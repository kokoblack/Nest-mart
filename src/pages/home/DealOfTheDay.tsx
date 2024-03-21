import React from "react";
import DealOfThDayCard from "../../components/home/DealOfThDayCard";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { DealOfTheDayFirstCont, DealOfTheDaySecondCont } from "../../style/pages/home/DealOfTheDay";
import { MdKeyboardArrowRight } from "react-icons/md";
import DealOfTheDayProduct from "../../components/home/DealOfTheDayProduct";

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

      <section className={css(flex.raw({columnGap: 'md', wrap: 'yes'}), DealOfTheDaySecondCont)}>
        <DealOfThDayCard />
        <DealOfThDayCard />
        <DealOfThDayCard />
        <DealOfThDayCard />
      </section>

      <section>
        <DealOfTheDayProduct/>
      </section>
    </section>
  );
};

export default DealOfTheDay;
