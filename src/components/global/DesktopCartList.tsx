import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { FaStar } from "react-icons/fa";
import { button } from "../../style/recipe/button";
import { BiTrash } from "react-icons/bi";
import {
  wishlistButton,
  wishlistImg,
  wishlistInStock,
  wishlistPrice,
  wishlistProductCont,
  wishlistProductName,
} from "../../style/pages/wishlist/wishlist";
import ProductSelect from "./ProductSelect";
import {
  desktopCartListImg,
  desktopCartListPrice,
  desktopCartListProductCont,
  desktopCartListSubTotal,
} from "../../style/component/global/desktopCartList";
import { useCartStore } from "../../redux/CartReducer";

type DesktopCartList = {
  img: string;
  name: string;
  price: number;
  type: string;
  subtotal?: number;
  quantity?: number;
};

const DesktopCartList = ({
  img,
  name,
  price,
  type,
  subtotal,
  quantity,
}: DesktopCartList) => {
  const { clearItem } = useCartStore();
  return (
    <>
      <tr>
        <td data-cell="name">
          <div
            className={css(
              flex.raw({ type: "startX" }),
              type !== "cart"
                ? wishlistProductCont
                : desktopCartListProductCont,
            )}
          >
            <figure
              className={css(
                type !== "cart" ? wishlistImg : desktopCartListImg,
              )}
            >
              <img src={img} alt="image" />
            </figure>
            <div>
              <p className={css(wishlistProductName)}>{name}</p>
              <div
                className={css(flex.raw({ columnGap: "sm", type: "startX" }), {
                  fontSize: ".8rem",
                })}
              >
                <span
                  className={css(
                    { color: "yellow", my: ".5rem" },
                    flex.raw({ columnGap: "sm" }),
                  )}
                >
                  <i>
                    <FaStar />
                  </i>
                  <i>
                    <FaStar />
                  </i>
                  <i>
                    <FaStar />
                  </i>
                  <i>
                    <FaStar />
                  </i>
                  <i>
                    <FaStar />
                  </i>
                </span>
                <p className={css({ color: "secondary.700" })}>4.0</p>
              </div>
            </div>
          </div>
        </td>
        <td
          data-cell="price"
          className={css(
            type !== "cart" ? wishlistPrice : desktopCartListPrice,
            { color: type === "cart" ? "secondary.400" : "primary.100" },
          )}
        >
          ${price}
        </td>
        <td data-cell="stock" className={css({ textAlign: "right" })}>
          {type === "cart" ? (
            <ProductSelect type="cart" quantity={quantity!} name={name} />
          ) : (
            <p className={css(wishlistInStock)}>In Stock</p>
          )}
        </td>
        <td data-cell="action">
          {type === "cart" ? (
            <p className={css(desktopCartListSubTotal)}>
              ${subtotal!.toFixed(2)}
            </p>
          ) : (
            <button
              // onClick={() => addItem()}
              className={css(
                button.raw({ px: "lg", py: "sm" }),
                {
                  fontWeight: "500",
                },
                wishlistButton,
              )}
            >
              Add to cart
            </button>
          )}
        </td>
        <td data-cell="remove">
          <i
            onClick={() => clearItem(name)}
            className={css(flex.raw({ columnGap: "sm" }), {
              color: "secondary.400",
              cursor: "pointer",
            })}
          >
            <BiTrash />
          </i>
        </td>
      </tr>
    </>
  );
};

export default DesktopCartList;
