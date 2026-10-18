import Banner2 from "../../components/global/Banner2";
import Category from "../../components/layouts/Category";
import Gallary from "../../components/layouts/Gallary";
import PopularTag from "../../components/layouts/PopularTag";
import Product from "../../components/layouts/Product";
import SortItems from "../../components/global/SortItems";
import { blogdata } from "../../data/blogdata";
import Search from "../../components/global/Search";
import { css } from "../../../styled-system/css";
import ShowItems from "../../components/global/ShowItems";
import BlogContent from "../../components/blog/BlogContent";
import { flex } from "../../style/recipe/flex";
import { blogContentCont, blogSideMenu } from "../../style/pages/blog/blog";
import Banner from "../../components/global/Banner";
import Pagination from "../../components/global/Pagination";
import { useState } from "react";
import { Cont } from "../../style/component/global/sortItems";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(20);
  const [type, setType] = useState("Show All");
  const cat = [
    "Show All",
    "Side Dish",
    "Soups and Stews",
    "Salad",
    "Dessert",
    "Breakfast",
    "Vegan",
    "Dairy Free",
    "Gluten Free",
    "Soups",
    "Vegetarian",
  ];

  const searchdata = blogdata.filter((data) => {
    const matchesSearch =
      search.trim() === "" ||
      data.title.toLowerCase().includes(search.trim().toLowerCase());

    const matchesCategory = type === "Show All" || data.category === type;

    return (
      (search.trim() !== "" || type !== "") && matchesSearch && matchesCategory
    );
  });

  return (
    <main>
      <Banner2 text="Blog" items={cat} />

      <section
        className={css(flex.raw({ type: "startY" }), {
          columnGap: "3rem",
          w: "100%",
        })}
      >
        <section className={css({ w: "100%" })}>
          <section
            className={css(Cont, flex.raw({ type: "endX", columnGap: "md" }), {
              mb: "2.5rem",
            })}
          >
            <section className={css(flex.raw({ type: "endX", columnGap: "md" }))}>
              <ShowItems number={number} setNumber={setNumber} />
              <SortItems type={type} cat={cat} setType={setType} />
            </section>
            <div className={css({ hideFrom: "1104px"})}>
              <Search search={search} setSearch={setSearch} />
            </div>
          </section>

          <section className={css(blogContentCont)}>
            {searchdata.slice(0, number).map((data, index) => (
              <BlogContent key={index} {...data} />
            ))}
          </section>

          <section>
            {searchdata.length > number}
            <Pagination />
          </section>
        </section>

        <section
          className={css(blogSideMenu, flex.raw({ vertical: "vertical" }))}
        >
          <Search search={search} setSearch={setSearch} />
          <Category />
          <Product text="Trending Now" />
          <Gallary />
          <PopularTag />
        </section>
      </section>

      <Banner id={0} />
    </main>
  );
};

export default Blog;
