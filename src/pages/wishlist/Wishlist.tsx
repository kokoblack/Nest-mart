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
import { useWishlistStore } from "../../redux/WishlistReducer";
import { cartNoItems } from "../../style/pages/cart/cart";

const Wishlist = () => {
  const { wishlists } = useWishlistStore();

  return (
    <main>
      <div className={css(wishlistCont)}>
        <section className={css(flex.raw({ type: "endY", columnGap: "md" }))}>
          <CartHeader heading="Your Whishlist" total={wishlists.length} />
          {wishlists.length !== 0 && <DelProduct type="wishlist" />}
        </section>

        <section className={css(cartNoItems)}>
          {wishlists.length === 0 && <p>Your wishlist is empty.</p>}
        </section>

        <section className={css(wishlistTableWrapper)}>
          {wishlists.length !== 0 && (
            <table className={css(wishlistTableCont)}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Stock Status</th>
                  <th>Action</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {wishlists.map((items, index) => (
                  <DesktopCartList
                    key={index}
                    img={items.img}
                    type="wishlist"
                    name={items.name}
                    price={items.price}
                  />
                ))}
              </tbody>
            </table>
          )}
        </section>

        <section>
          {wishlists.map((items, index) => (
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
