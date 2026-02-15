import { useState } from "react";
import ProductCard from "../../components/global/ProductCard";
import { css } from "../../../styled-system/css";
import {
  productContainer,
  productSecondSection,
} from "../../style/pages/home/product";
import { product } from "../../data/product";
import TitleLink from "../../components/global/TitleLink";

const PopularProduct = () => {
  const [productType, setProductType] = useState("All");

  const filterdProduct = product.filter((data) => {
    return data.fullCat === productType;
  });

  const productLink = [
    "All",
    "Fruits",
    "Vegetables",
    "Meats",
    "Pet Foods",
    "Coffes & Teas",
    "Milks & Dairies",
  ];

  return (
    <section className={css(productContainer)}>
      <TitleLink
        title="Popular Product"
        link={productLink}
        setProductType={setProductType}
      />

      <section className={css(productSecondSection)}>
        {productType !== "All"
          ? filterdProduct
              .slice(0, 20)
              .map((data, index) => <ProductCard key={index} {...data} />)
          : product
              .slice(0, 20)
              .map((data, index) => <ProductCard key={index} {...data} />)}
      </section>
    </section>
  );
};

export default PopularProduct;
