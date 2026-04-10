import { css } from "../../../styled-system/css";
import {
  wishlistCont,
  wishlistTableCont,
  wishlistTableWrapper,
} from "../../style/pages/wishlist/wishlist";
import Banner from "../../components/global/Banner";
import MobileCartList from "../../components/global/MobileCartList";
import CartHeader from "../../components/global/CartHeader";
import DesktopCartList from "../../components/global/DesktopCartList";
import DelProduct from "../../components/global/DelProduct";
import { flex } from "../../style/recipe/flex";
import { useCartStore } from "../../redux/CartReducer";

const Wishlist = () => {
  const { items } = useCartStore();

  return (
    <main>
      <div className={css(wishlistCont)}>
        <section className={css(flex.raw({ type: "endY", columnGap: "md" }))}>
          <CartHeader heading="Your Whishlist" total={5} />
          <DelProduct type="wishlist" />
        </section>

        <section className={css(wishlistTableWrapper)}>
          <table className={css(wishlistTableCont)}>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Action</th>
              <th>Remove</th>
            </tr>

            {items.map((items, index) => (
              <DesktopCartList
                key={index}
                img={items.img}
                type="wishlist"
                name={items.name}
                price={items.price}
              />
            ))}
          </table>
        </section>

        <section>
          {items.map((items, index) => (
            <MobileCartList
              key={index}
              img={items.img}
              type="wishlist"
              name={items.name}
              price={items.price}
            />
          ))}
        </section>
      </div>

      <Banner id={1} />
    </main>
  );
};

export default Wishlist;
