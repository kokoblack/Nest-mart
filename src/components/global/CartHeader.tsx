import { css } from "../../../styled-system/css";
import { cartlistCont } from "../../style/component/global/cartList";
type CartList = {
  heading: string;
  total: number;
};
const CartHeader = ({ heading, total }: CartList) => {
  return (
    <section className={css(cartlistCont)}>
      <h3>{heading}</h3>
      <p>
        There are <span>{total}</span> products in this list
      </p>
    </section>
  );
};

export default CartHeader;
