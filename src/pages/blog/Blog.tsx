import Banner2 from "../../components/global/Banner2";
import Category from "../../components/layouts/Category";
import Filter from "../../components/layouts/Filter";
import Gallary from "../../components/layouts/Gallary";
import PopularTag from "../../components/layouts/PopularTag";
import Product from "../../components/layouts/Product";
// import { product } from "../../data/product";
// import { randomDate } from "../../utils/Randomdate";

const Blog = () => {
  // console.log(product.length);
  // const date = randomDate(new Date('2022-01-01'), new Date()).
  // const test = [
  //   randomDate(new Date("01 january 2022"), new Date()).toUTCString(),
  //   randomDate(new Date("01 january 2022"), new Date()).toUTCString(),
  //   randomDate(new Date("01 january 2022"), new Date()).toUTCString(),
  //   randomDate(new Date("01 january 2022"), new Date()).toUTCString(),
  //   randomDate(new Date("01 january 2022"), new Date()).toUTCString(),
  //   randomDate(new Date("01 january 2022"), new Date()).toUTCString(),
  // ];
  // console.log(test.sort());
  // console.log(test.sort((a, b) => b - a));
  return (
    <main>
      {/* <h1>{date}</h1> */}
      <Banner2 text="Blog" />
      <Category />
      <Product text="Trending Now" />
      <Gallary />
      <PopularTag />
      <Filter />
    </main>
  );
};

export default Blog;
