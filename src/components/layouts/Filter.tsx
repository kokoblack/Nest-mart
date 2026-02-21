import { css } from "../../../styled-system/css";
import { SidebarCardCont } from "../../style/global";
import DoubleSliderRange from "./DoubleSliderRange";
import Headline from "../global/Headline";
import Selector from "./Selector";
import { LuFilter } from "react-icons/lu";
import { button } from "../../style/recipe/button";
import { vegi } from ".";
import { brand, discount } from "../../data/filterData";

const Filter = () => {
  
  return (
    <section className={css(SidebarCardCont, { position: "relative" })}>
      <Headline title="Fill by price" />
      <DoubleSliderRange />
      <Selector value={brand} title="Brand" />
      <Selector value={discount} title="Discount Percentage" />
      <button
        className={css(
          button.raw({ columnGap: "sm", fontSize: "md", px: "xl", py: "md" }),
          { mt: ".3rem", mb: "1.5rem" }
        )}
      >
        <span>
          <LuFilter />
        </span>
        <p>Filter</p>
      </button>
      <figure
        className={css({
          position: "absolute",
          bottom: "0px",
          right: "0px",
          w: "fit-content",
          h: "auto",
        })}
      >
        <img src={vegi} alt="food" />
      </figure>
    </section>
  );
};

export default Filter;
