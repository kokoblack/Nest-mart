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

const Blog = () => {
  return (
    <main>
      <Banner2 text="Blog" />

      <section  className={css(flex.raw({type: "startY"}), {columnGap: "3rem", w: "100%"})}>
        <section className={css({w: "100%"})}>
          <section className={css(flex.raw({type: 'endX', columnGap: "md"}), {mb: "2.5rem"})}>
            <ShowItems />
            <SortItems />
          </section>

          <section  className={(css(blogContentCont))}>
            {blogdata.slice(0, 20).map((data, index) => (
              <BlogContent
                key={index}
                img={data.img}
                category={data.category}
                readTime={data.readTime}
                date={data.date}
                title={data.title}
                views={data.views}
              />
            ))}
          </section>
        </section>

        <section className={css(blogSideMenu, flex.raw({vertical: "vertical"}))}>
          <Search />
          <Category />
          <Product text="Trending Now" />
          <Gallary />
          <PopularTag />
        </section>
      </section>

      <Banner id={0}/>
    </main>
  );
};

export default Blog;
