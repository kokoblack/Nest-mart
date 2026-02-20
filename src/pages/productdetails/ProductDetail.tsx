import { css } from "../../../styled-system/css";
import ProductInfo from "./ProductInfo";
import {
  prodDetailCont,
  prodDetailContent,
  prodDetailMenuButton,
  prodDetailRelatedProCard,
  prodDetailRelatedProCont,
} from "../../style/pages/productdetail/productDetail";
import CartButton from "../../components/productdetail/CartButton";
import ProductDescription from "./ProductDescription";
import { shopSideMenu } from "../../style/pages/shop/shop";
import { prodInfoSideMenu } from "../../style/pages/productdetail/productInfo";
import { flex } from "../../style/recipe/flex";
import Gallary from "../../components/layouts/Gallary";
import Category from "../../components/layouts/Category";
import Product from "../../components/layouts/Product";
import RelProductCard from "../../components/global/RelProductCard";
import { product } from "../../data/product";
import Banner from "../../components/global/Banner";

const ProductDetail = () => {
  return (
    <main className={css(prodDetailCont)}>
      <div className={css(flex.raw({ type: "startY" }), prodDetailContent)}>
        <section>
          <ProductInfo />
          <ProductDescription />
        </section>

        <section
          className={css(
            shopSideMenu,
            prodInfoSideMenu,
            flex.raw({ vertical: "vertical" }),
          )}
        >
          <Gallary />
          <Category />
          <Product text="New products" />
        </section>
      </div>

      <section className={css(prodDetailMenuButton)}>
        <CartButton />
      </section>

      <section className={css(prodDetailRelatedProCont)}>
        <section
          className={css({
            border: "1px solid",
            borderBottomColor: "#ECECEC",
            mb: "2rem",
            borderXColor: "white",
            borderTopColor: "white",
          })}
        >
          <h3>Related Products</h3>
          <hr />
        </section>

        <section className={css(prodDetailRelatedProCard)}>
          {product.slice(0, 10).map((data, index) => (
            <RelProductCard key={index} {...data} />
          ))}
        </section>
      </section>

      <Banner id={1} />
    </main>
  );
};

export default ProductDetail;
