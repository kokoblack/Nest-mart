import Headline from "../global/Headline";
import { FaStar } from "react-icons/fa";
import { Article3, Article4, Article5, Article6 } from ".";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { productCont } from "../../style/component/layouts/product";
import ProductsCard from "./ProductsCard";

const Product = ({ text }: { text: string }) => {
  const productDetails = [
    {
      name: "Chen Cardigan",
      price: "$99.50",
      img: Article3,
    },
    {
      name: "Chen Sweater",
      price: "$89.50",
      img: Article4,
    },
    {
      name: "Colorful Jacket",
      price: "$25",
      img: Article5,
    },
    {
      name: "Lorem ipsum",
      price: "$25",
      img: Article6,
    },
  ];
  return (
    <section className={css(productCont)}>
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
