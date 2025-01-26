import Banner2 from "../../components/global/Banner2";
import Category from "../../components/layouts/Category";
import Filter from "../../components/layouts/Filter";
import Gallary from "../../components/layouts/Gallary";
import PopularTag from "../../components/layouts/PopularTag";
import Product from "../../components/layouts/Product";

const Blog = () => {
  return (
    <main>
      <Banner2 text="Blog" />
      <Category/>
      <Product text="Trending Now"/>
      <Gallary/>
      <PopularTag/>
      <Filter/>
    </main>
  );
};

export default Blog;
