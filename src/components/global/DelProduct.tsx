import { BiTrash } from "react-icons/bi";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import { delProductCont } from "../../style/component/global/delProduct";
import { useCartStore } from "../../redux/CartReducer";
import { useWishlistStore } from "../../redux/WishlistReducer";

const DelProduct = ({ type }: { type: string }) => {
  const clearCart = useCartStore((state) => state.clearCart);
  const clearWishlists = useWishlistStore((state) => state.clearWishlists);

  const handleClick = () => {
    type === "wishlist" ? clearWishlists() : clearCart();
  };
  return (
    <div
      onClick={handleClick}
      className={css(flex.raw({ columnGap: "sm" }), delProductCont)}
    >
      <i>
        <BiTrash />
      </i>
      <p>Clear {type === "cart" ? "Cart" : "Items"}</p>
    </div>
  );
};

export default DelProduct;
