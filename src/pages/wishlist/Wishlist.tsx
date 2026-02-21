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

const Wishlist = () => {
  return (
    <main>
      <div className={css(wishlistCont)}>
        <CartHeader heading="Your Whishlist" total={5} />

        <section className={css(wishlistTableWrapper)}>
          <DesktopCartList
            img={img}
            type="wishlist"
            name="Seeds of Change Organic Quinoa, Brown"
            price="$40"
          />
        </section>

        <MobileCartList
          img={img}
          type="cart"
          name="Seeds of ChangeOrganic Quinoa, Brown"
          price="$50"
        />
      </div>

      <Banner id={1} />
    </main>
  );
};

export default Wishlist;
