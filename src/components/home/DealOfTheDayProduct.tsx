import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import DealOfTheDayProductCard from "./DealOfTheDayProductCard";
import { DOTDProduct } from "../../type/types";
import Headline from "../global/Headline";

type DealOfTheDayProductProps = {
  product: DOTDProduct[]
  title: string
}

const DealOfTheDayProduct = ({product, title}: DealOfTheDayProductProps) => {
  return (
    <section className={css({w: "fit-content"})}>
      <Headline title={title}/>

      <section className={css(flex.raw({vertical: 'vertical', gap: 'lg'}))}>
        {product.map((data, index) => (<DealOfTheDayProductCard key={index} {...data}/>))}
      </section>
    </section>
  );
};

export default DealOfTheDayProduct;
