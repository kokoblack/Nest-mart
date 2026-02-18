import { css } from "../../../styled-system/css";
import ProductInfo from "./ProductInfo";
import {
  prodDetailCont,
  prodDetailContent,
  prodDetailMenuButton,
} from "../../style/pages/productdetail/productDetail";
import CartButton from "../../components/productdetail/CartButton";
import ProductDescription from "./ProductDescription";
import { shopSideMenu } from "../../style/pages/shop/shop";
import { prodInfoSideMenu } from "../../style/pages/productdetail/productInfo";
import { flex } from "../../style/recipe/flex";
import Gallary from "../../components/layouts/Gallary";
import Category from "../../components/layouts/Category";
import Product from "../../components/layouts/Product";

const ProductDetail = () => {
  return (
    <main className={css(prodDetailCont,)}>
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
    </main>
  );
};

export default ProductDetail;
