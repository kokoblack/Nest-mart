import Headline from "../global/Headline";
import { Article3, Article4, Article5, Article6 } from ".";
import { css } from "../../../styled-system/css";
import ProductsCard from "./ProductsCard";
import { SidebarCardCont } from "../../style/global";

const Product = ({ text }: { text: string }) => {
  return (
    <section className={css(SidebarCardCont)}>
      <Headline title={text} />

      <ProductsCard img={Article3} price="$99.50" name="Chen Cardigan" />
      <hr className={css({color: "secondary.800", my: ".5rem"})}/>
      <ProductsCard img={Article4} price="$89.50" name="Chen Sweater" />
      <hr className={css({color: "secondary.800", my: ".5rem"})}/>
      <ProductsCard img={Article5} price="$25" name="Colorful Jacket" />
      <hr className={css({color: "secondary.800", my: ".5rem"})}/>
      <ProductsCard img={Article6} price="$25" name="Lorem ipsum" />
    </section>
  );
};

export default Product;
