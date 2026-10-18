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
import Banner from "../../components/global/Banner";
import { useShopStore } from "../../redux/ShopReducer";

const Shop = () => {
  const [view, setView] = useState(false);
  const [type, setType] = useState("Show All");
  const cat = ["Cabbage", "Broccoli", "Artichoke", "celery", "spinach"];
  const category = [
    "Show All",
    "Snack",
    "Hodo Foods",
    "Vegetables",
    "Pet Foods",
    "Cream",
    "Coffes",
    "Meats",
  ];
  const [number, setNumber] = useState(20);

  const { name } = useShopStore();

  const data = product.filter((data) => {
    const matchesSearch =
    name.trim() === "" ||
    data.name.toLowerCase().includes(name.trim().toLowerCase());

  const matchesCategory =
    type === "Show All" ||
    data.category === type;

  return (
    name.trim() !== "" || type !== ""
  ) && matchesSearch && matchesCategory;
  });

  console.log(type);

  return (
    <main>
      <Banner2 text="Shop" items={cat} />

      <section
        className={css(flex.raw({ type: "startY" }), {
          columnGap: "3rem",
          w: "100%",
          mb: "2rem",
        })}
      >
        <section className={css({ w: "100%" })}>
          <section
            className={css(
              flex.raw({ type: "endX", columnGap: "md" }),
              shopFilterSec,
            )}
          >
            {name !== "" && (
              <p className={css(shopSearchResultText)}>
                We found <span>{data.length}</span> items for you!
              </p>
            )}
            <div
              className={css(
                flex.raw({ type: "endX", columnGap: "md" }),
                shopSortSec,
              )}
            >
              <DisplayType setView={setView} />
              <ShowItems number={number} setNumber={setNumber} />
              <SortItems type={type} cat={category} setType={setType} />
            </div>
          </section>

          <section className={css(shopHide)}>
            {!view && (
              <section className={css(shopProdCard)}>
                {data.slice(0, number).map((data, index) => (
                  <ProductCard key={index} {...data} />
                ))}
              </section>
            )}

            {view && (
              <section className={css(shopProdCardListView)}>
                {data.slice(0, number).map((data, index) => (
                  <ProductCardListView key={index} {...data} />
                ))}
              </section>
            )}
          </section>

          <section className={css(shopShow)}>
            <section className={css(shopProdCardListView)}>
              {data.slice(0, number).map((data, index) => (
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

      <Banner id={1} />
    </main>
  );
};

export default Shop;
