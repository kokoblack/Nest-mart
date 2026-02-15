import { css } from "../../../styled-system/css";
import Banner2 from "../../components/global/Banner2";
import Pagination from "../../components/global/Pagination";
import ShowItems from "../../components/global/ShowItems";
import SortItems from "../../components/global/SortItems";
import ProductCard from "../../components/global/ProductCard";
import Category from "../../components/layouts/Category";
import Filter from "../../components/layouts/Filter";
import Product from "../../components/layouts/Product";
import { product } from "../../data/product";
import {
  shopFilterSec,
  shopHide,
  shopProdCard,
  shopProdCardListView,
  shopSearchResultText,
  shopShow,
  shopSideMenu,
  shopSortSec,
} from "../../style/pages/shop/shop";
import { flex } from "../../style/recipe/flex";
import DisplayType from "../../components/global/DisplayType";
import ProductCardListView from "../../components/global/ProductCardListView";
import { useState } from "react";
import DealOfTheDay from "../home/DealOfTheDay";
// import MoveRightOrLeft from "../../components/global/MoveRightOrLeft";

const Shop = () => {
  const [view, setView] = useState(false);
  const cat = ["Cabbage", "Broccoli", "Artichoke", "celery", "spinach"];

  return (
    <main>
      <Banner2 text="Shop" items={cat} />

      <section
        className={css(flex.raw({ type: "startY" }), {
          columnGap: "3rem",
          w: "100%", mb: "2rem"
        })}
      >
        <section className={css({ w: "100%" })}>
          <section
            className={css(
              flex.raw({ type: "endX", columnGap: "md" }),
              shopFilterSec,
            )}
          >
            <p className={css(shopSearchResultText)}>
              We found <span>29</span> items for you!
            </p>
            <div
              className={css(
                flex.raw({ type: "endX", columnGap: "md" }),
                shopSortSec,
              )}
            >
              <DisplayType setView={setView} />
              <ShowItems />
              <SortItems />
              {/* <MoveRightOrLeft/> */}
            </div>
          </section>

          <section className={css(shopHide)}>
            {!view && (
              <section className={css(shopProdCard)}>
                {product.slice(0, 20).map((data, index) => (
                  <ProductCard key={index} {...data} />
                ))}
              </section>
            )}

            {view && (
              <section className={css(shopProdCardListView)}>
                {product.slice(0, 20).map((data, index) => (
                  <ProductCardListView key={index} {...data} />
                ))}
              </section>
            )}
          </section>

          <section className={css(shopShow)}>
            <section className={css(shopProdCardListView)}>
              {product.slice(0, 20).map((data, index) => (
                <ProductCardListView key={index} {...data} />
              ))}
            </section>
          </section>

          <section>
            <Pagination />
          </section>
        </section>

        <section
          className={css(shopSideMenu, flex.raw({ vertical: "vertical" }))}
        >
          <Filter />
          <Category />
          <Product text="New products" />
        </section>
      </section>

      <DealOfTheDay />
    </main>
  );
};

export default Shop;
