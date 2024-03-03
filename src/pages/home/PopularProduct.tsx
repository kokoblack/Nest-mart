import React, { useState } from "react";
import ProductCard from "../../components/home/ProductCard";
import { css } from "../../../styled-system/css";
import { productContainer, productFirstSection, productSecondSection } from "../../style/home/product";
import { flex } from "../../style/recipe/flex";
import { productCardData } from "../../data/productCard";

const PopularProduct = () => {
  const [active, setActive] = useState(0);
  const product = [
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
      <section className={css(flex.raw({}), productFirstSection)}>
        <h3>Popular Products</h3>
        <nav className={css({ ml: [undefined, undefined, undefined, undefined, 'auto'] }, flex.raw())}>
          <ul
            className={css(flex.raw({ columnGap: "md" }), {
              fontSize: ['.8rem', '.8rem', '.8rem', '.9rem', '.9rem',],
              fontWeight: "500",
            })}
          >
            {product.map((data, index) => (
              <li
              onClick={() => setActive(index)}
                key={index}
                className={css({
                  color: active === index ? "primary.100" : "null",
                  cursor: "pointer",
                })}
              >
                {data}
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className={css(productSecondSection)}>
        {productCardData.map((data, index) => (
          <ProductCard key={index} {...data}/>
        ))}
      </section>
    </section>
  );
};

export default PopularProduct;
