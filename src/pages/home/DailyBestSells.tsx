import { useRef, useState } from "react";
import TitleLink from "../../components/global/TitleLink";
import DailyBestSellsCard from "../../components/home/DailyBestSellsCard";
import { TiArrowRight } from "react-icons/ti";
import { css } from "../../../styled-system/css";
import { button } from "../../style/recipe/button";
import { product } from "../../data/product";
import { flex } from "../../style/recipe/flex";
import {
  dailyBestSellsCardSection,
  dailyBestSellsCont,
  dailyBestSellsNature,
} from "../../style/pages/home/dailyBestSells";

const DailyBestSells = () => {
  const [productType, setProductType] = useState("Featured");

  const divRef = useRef<HTMLDivElement>(null);

  const filterdProduct = product.filter((data) => {
    return data.cat === productType;
  });

  const link = ["Featured", "Popular", "New added"];

  return (
    <section className={css(dailyBestSellsCont)}>
      <TitleLink
        title="Daily Best Sells"
        setProductType={setProductType}
        link={link}
      />

      <section
        ref={divRef}
        className={css(flex.raw({columnGap: "xlg"}), {
          boxSizing: "border-box",
          w: "100%",
          justifyContent: "space-between",
          alignItems: "start",
        })}
      >
        <section className={css(dailyBestSellsNature)}>
          <p className={css()}>Bring nature into your home</p>
          <button
            className={css(
              button.raw({
                move: "center",
                color: "white",
                bg: "green",
                py: "sm",
              })
            )}
          >
            <p>Shop Now</p>
            <span>
              <TiArrowRight />
            </span>
          </button>
        </section>

        <section
          className={css(
            flex.raw({ columnGap: "lg" }),
            dailyBestSellsCardSection
          )}
        >
          {productType !== "Featured"
            ? filterdProduct.map((data, index) => (
                <DailyBestSellsCard key={index} {...data} />
              ))
            : product.map((data, index) => (
                <DailyBestSellsCard key={index} {...data} />
              ))}
        </section>
      </section>
    </section>
  );
};

export default DailyBestSells;
