import { useState } from "react";
import ProductCard from "../../components/home/ProductCard";
import { css } from "../../../styled-system/css";
import {
  productContainer,
  productSecondSection,
} from "../../style/home/product";
import { product } from "../../data/product";
import TitleLink from "../../components/global/TitleLink";
import useScreenWidth from "../../hooks/useScreenWidth";

const PopularProduct = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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

  const howMany = screenWidth <= 525 ? 5 : product.length;

  useScreenWidth(setScreenWidth)

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
              .slice(0, howMany)
              .map((data, index) => <ProductCard key={index} {...data} />)
          : product
              .slice(0, howMany)
              .map((data, index) => <ProductCard key={index} {...data} />)}
      </section>
    </section>
  );
};

export default PopularProduct;
