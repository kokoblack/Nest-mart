import { css } from "../../../styled-system/css";
import ProductInfo from "./ProductInfo";
import { prodDetailCont, prodDetailMenuButton } from "../../style/pages/productdetail/productDetail";
import CartButton from "../../components/productdetail/CartButton";

const ProductDetail = () => {
  return (
    <main className={css(prodDetailCont)}>
      <ProductInfo />

      <section className={css(prodDetailMenuButton)}>
        <CartButton/>
      </section>
    </main>
  );
};

export default ProductDetail;
