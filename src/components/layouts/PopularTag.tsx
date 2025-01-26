import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import Headline from "../global/Headline"
import { IoCloseOutline } from "react-icons/io5";
import { SidebarCardCont } from "../../style/global";
import { productTag } from "../../style/component/layouts/productTags";


const PopularTag = () => {
    const tags = ["Cabbage", "Broccolli", "Smoothie", "Fruit", "Salad", "Appetizer",]
  return (
    <section className={css(SidebarCardCont)}>
        <Headline title="Popular Tags"/>

        <section className={css(flex.raw({columnGap: "xlg", wrap: "yes", type: "startX", rowGap: "md"}), {mb: "1rem"})}>
        {tags.map((text, index) => (
          <div key={index} className={css(productTag, flex.raw({columnGap: "sm"}))}>
            <span >
              <IoCloseOutline />
            </span>
            <p>{text}</p>
          </div>
        ))}
      </section>

    </section>
  )
}

export default PopularTag