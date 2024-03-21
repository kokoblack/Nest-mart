import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import DealOfTheDayProductCard from "./DealOfTheDayProductCard";
import { DealOfTheDayProductCont } from "../../style/component/home/dealOfTheDayProduct";

const DealOfTheDayProduct = () => {
  return (
    <section className={css(DealOfTheDayProductCont)}>
      <h3>Top Selling</h3>

      <div>
        <hr />
        <hr />
      </div>

      <div>
        <DealOfTheDayProductCard />
      </div>
    </section>
  );
};

export default DealOfTheDayProduct;
