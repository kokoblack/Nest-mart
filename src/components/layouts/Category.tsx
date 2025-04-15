import Headline from "../global/Headline";
import { cat1, cat2, cat3, cat4, cat5 } from ".";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import {
  categoryNumCount,
  categorySection,
} from "../../style/component/layouts/category";
import { SidebarCardCont } from "../../style/global";

const Category = () => {
  const catDetail = [
    {
      img: cat1,
      text: "Milks & Dairies",
    },
    {
      img: cat2,
      text: "Clothing",
    },
    {
      img: cat3,
      text: "Pet Foods",
    },
    {
      img: cat4,
      text: "Baking material",
    },
    {
      img: cat5,
      text: "Fresh Fruit",
    },
  ];
  return (
    <section className={css(SidebarCardCont)}>
      <Headline title="Category" />

      {catDetail.map((detail, index) => (
        <section
          className={css(flex.raw({ columnGap: "lg" }), categorySection)}
          key={index}
        >
          <figure>
            <img src={detail.img} alt="cat1" />
          </figure>
          <p>{detail.text}</p>
          <p className={css(categoryNumCount)}>2</p>
        </section>
      ))}
    </section>
  );
};

export default Category;
