import { css } from "../../../styled-system/css";
import {
  prodInfoSelectButton,
  prodInfoSelectCont,
  prodInfoSelectWishList,
} from "../../style/pages/productdetail/productInfo";
import { flex } from "../../style/recipe/flex";
import { button } from "../../style/recipe/button";
import { GrCart } from "react-icons/gr";
import { PiHeartStraight } from "react-icons/pi";
import ProductSelect from "../global/ProductSelect";
import { useWishlistStore } from "../../redux/WishlistReducer";
import { useCartStore } from "../../redux/CartReducer";
import { useEffect, useState } from "react";

type CartButtonProps = {
  name?: string;
  price?: number;
  wishlist?: boolean;
  img?: string;
};

const CartButton = ({ name, price, wishlist, img }: CartButtonProps) => {
  const { addWishlist, wishlists, removeWishlist } = useWishlistStore();
  const { updateQuantity, items } = useCartStore();
  const itemIndex = items.findIndex((i) => i.name === name);
  const getQuantity = itemIndex === -1 ? 1 : items[itemIndex].quantity;
  const [value, setvalue] = useState(getQuantity!);

  useEffect(() => {
    setvalue(getQuantity!);
  }, [getQuantity]);
  console.log(value);

  const findIndex = wishlists.findIndex((item) => item.name === name);
  const checkWishlist = findIndex !== -1 && wishlists[findIndex].wishlist;

  const wishlistItem = {
    name: name!,
    price: price!,
    wishlist: wishlist!,
    img: img!,
  };

  const item = {
    name: name!,
    price: price!,
    img: img!,
  };

  const handleClick = () => {
    !checkWishlist ? addWishlist(wishlistItem) : removeWishlist(name!);
  };
  return (
    <>
      <div
        className={css(
          flex.raw({ columnGap: "lg", type: "startX" }),
          prodInfoSelectCont,
        )}
      >
        <ProductSelect type="" setValue={setvalue} name={name!} />
      </div>

      <button
        onClick={() => updateQuantity(name!, value, item)}
        className={css(
          button.raw({ fontSize: "md", py: "sm" }),
          prodInfoSelectButton,
        )}
      >
        <i>
          <GrCart />
        </i>
        <p>Add to cart</p>
      </button>

      <button
        style={{
          color: checkWishlist ? "#ffffff" : "#7E7E7E",
          backgroundColor: checkWishlist ? "#3BB77E" : "transparent",
          borderColor: checkWishlist ? "#3BB77E" : "#ECECEC",
        }}
        onClick={handleClick}
        className={css(prodInfoSelectWishList)}
      >
        <PiHeartStraight />
      </button>
    </>
  );
};

export default CartButton;
