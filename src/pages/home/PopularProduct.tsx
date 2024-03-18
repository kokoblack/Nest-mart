import { useState, useEffect } from "react";
import ProductCard from "../../components/home/ProductCard";
import { css } from "../../../styled-system/css";
import {
  productContainer,
  productFirstSection,
  productSecondSection,
} from "../../style/home/product";
import { flex } from "../../style/recipe/flex";
import { productCardData } from "../../data/productCard";

const PopularProduct = () => {
  const [active, setActive] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [productType, setProductType] = useState("All");

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
      setScreenWidth(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <section className={css(productContainer)}>
      <section className={css(flex.raw({type: 'endY', columnGap: "xlg",}), productFirstSection)}>
        <h3 className={css({lineHeight: '2rem'})}>Popular Products</h3>
        <nav
          className={css(
            { ml: [undefined, undefined, undefined, undefined, "auto"] },
            flex.raw()
          )}
        >
          <ul
            className={css(flex.raw({ columnGap: "md" }), {
              fontSize: [".8rem", ".8rem", ".8rem", ".9rem", ".9rem"],
              fontWeight: "500",
            })}
          >
            {product.map((data, index) => (
              <li
                onClick={() => {
                  setActive(index);
                  setProductType(data);
                }}
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
