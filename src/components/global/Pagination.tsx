import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { paginationCont } from "../../style/component/global/pagnation";

const Pagination = () => {
  return (
    <section className={css(paginationCont, flex.raw({columnGap: "md" }))}>
      <i className={css( )}><IoIosArrowRoundBack /></i>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <p>...</p>
      <span>6</span>
      <i className={css()}><IoIosArrowRoundForward /></i>
    </section>
  );
};

export default Pagination;
