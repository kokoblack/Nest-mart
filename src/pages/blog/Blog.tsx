import Banner2 from "../../components/global/Banner2";
import Category from "../../components/layouts/Category";
import Filter from "../../components/layouts/Filter";
import Gallary from "../../components/layouts/Gallary";
import PopularTag from "../../components/layouts/PopularTag";
import Product from "../../components/layouts/Product";
import SortItems from "../../components/global/SortItems";
// import { blogdata } from "../../data/blogdata";
// import { randomDate } from "../../utils/Randomdate";
import Search from "../../components/global/Search";
import { css } from "../../../styled-system/css";
import ShowItems from "../../components/global/ShowItems";
// import { blogdata } from "../../data/blogdata";
// import BlogContent from "../../components/blog/BlogContent";

const Blog = () => {
  // const date = randomDate(new Date("01 january 2022"), new Date()).toLocaleString('en-US', {day: 'numeric', month: 'long', year: 'numeric'});

  // console.log(test.sort());
  // console.log(test.sort((a, b) => a.getTime() - b.getTime()));

  return (
    <main>
      <Banner2 text="Blog" />

      <section>
        <section>
          <section>
            <ShowItems />
            <SortItems />
          </section>

          <section>
            {/* <BlogContent/> */}
          </section>
        </section>

        <section className={css({ ml: "auto", w: "fit-content" })}>
          <Search />
          <Category />
          <Product text="Trending Now" />
          <Gallary />
          <PopularTag />
          <Filter />
        </section>
      </section>
    </main>
  );
};

export default Blog;
