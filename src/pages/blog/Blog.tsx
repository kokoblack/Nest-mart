import Banner2 from "../../components/global/Banner2";
import Category from "../../components/layouts/Category";
import Product from "../../components/layouts/Product";

const Blog = () => {
  return (
    <main>
      <Banner2 text="Blog" />
      <Category/>
      <Product text="Trending Now"/>
    </main>
  );
};

export default Blog;
