import { useState, useEffect } from "react";
import ProductCard from "../../components/home/ProductCard";
import { css } from "../../../styled-system/css";
import {
  productContainer,
  productSecondSection,
} from "../../style/home/product";
import { flex } from "../../style/recipe/flex";
import { productCardData } from "../../data/productCard";
import TitleLink from "../../components/global/TitleLink";

const PopularProduct = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [productType, setProductType] = useState("All");
  console.log(screenWidth)

  const filterdProduct = productCardData.filter((card) => {
    return card.fullCat === productType;
  });

  const product = [
    "All",
    "Fruits",
    "Vegetables",
    "Meats",
    "Pet Foods",
    "Coffes & Teas",
    "Milks & Dairies",
  ];

  const howMany = screenWidth <= 525 ? 5 : productCardData.length;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={css(productContainer)}>
      <TitleLink title="Popular Product" link={product} setProductType={setProductType}/>

      <section className={css(productSecondSection)}>
        {productType !== "All"
          ? filterdProduct
              .slice(0, howMany)
              .map((data, index) => <ProductCard key={index} {...data} />)
          : productCardData
              .slice(0, howMany)
              .map((data, index) => <ProductCard key={index} {...data} />)}
      </section>
    </section>
  );
};

export default PopularProduct;
