import { css } from "../../../styled-system/css";
import img from "../../assets/Link → product-10-1.jpg.jpg";
import {
  wishlistCont,
  wishlistTableWrapper,
} from "../../style/pages/wishlist/wishlist";
import Banner from "../../components/global/Banner";
import MobileCartList from "../../components/global/MobileCartList";
import CartHeader from "../../components/global/CartHeader";
import DesktopCartList from "../../components/global/DesktopCartList";
import DelProduct from "../../components/global/DelProduct";
import { flex } from "../../style/recipe/flex";

const Wishlist = () => {
  return (
    <main>
      <div className={css(wishlistCont)}>
        <section className={css(flex.raw({ type: "endY", columnGap: "md" }))}>
          <CartHeader heading="Your Whishlist" total={5} />
          <DelProduct />
        </section>

        <section className={css(wishlistTableWrapper)}>
          <DesktopCartList
            img={img}
            type="wishlist"
            name="Seeds of Change Organic Quinoa, Brown"
            price="$40"
          />
        </section>

        <section>
          <MobileCartList
            img={img}
            type="wishlist"
            name="Seeds of ChangeOrganic Quinoa, Brown"
            price="$50"
          />
        </section>
      </div>

      <Banner id={1} />
    </main>
  );
};

export default Wishlist;
