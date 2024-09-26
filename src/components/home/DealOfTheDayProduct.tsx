import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import DealOfTheDayProductCard from "./DealOfTheDayProductCard";
import { DealOfTheDayProductCont } from "../../style/component/home/dealOfTheDayProduct";
import { DOTDProduct } from "../../type/types";

type DealOfTheDayProductProps = {
  product: DOTDProduct[]
  title: string
}

const DealOfTheDayProduct = ({product, title}: DealOfTheDayProductProps) => {
  return (
    <section className={css(DealOfTheDayProductCont)}>
      <h3>{title}</h3>

      <div>
        <hr />
        <hr />
      </div>

      <div className={css(flex.raw({vertical: 'vertical', gap: 'lg'}))}>
        {product.map((data, index) => (<DealOfTheDayProductCard key={index} {...data}/>))}
      </div>
    </section>
  );
};

export default DealOfTheDayProduct;
