import { css } from "../../../styled-system/css";
import { prodInfoType } from "../../style/pages/productdetail/productInfo";
import { flex } from "../../style/recipe/flex";

const ProductInfoType = () => {
  return (
    <section className={css(flex.raw({columnGap: 'lg'}))}>
      <section className={css(prodInfoType)}>
        <p>
          Type: <span>Organic</span>
        </p>

        <p>
          MFG: <span>Jun 4 2022</span>
        </p>
        <p>
          Life: <span>70 days</span>
        </p>
      </section>

      <section className={css(prodInfoType)}>
        <p>
          SKU: <span>FWERTYU</span>
        </p>

        <p>
          Tags: <span>Snacks, Organic</span>
        </p>

        <p>
          Stock: <span>8 items in stock</span>
        </p>
      </section>
    </section>
  );
};

export default ProductInfoType;
