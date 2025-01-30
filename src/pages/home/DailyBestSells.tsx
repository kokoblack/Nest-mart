import { useRef, useState } from "react";
import TitleLink from "../../components/global/TitleLink";
import DailyBestSellsCard from "../../components/home/DailyBestSellsCard";
import { TiArrowRight } from "react-icons/ti";
import { css } from "../../../styled-system/css";
import { button } from "../../style/recipe/button";
import { product } from "../../data/product";
import { flex } from "../../style/recipe/flex";
import {
  dailyBestSellsCardNavigation,
  dailyBestSellsCardSection,
  dailyBestSellsCardSectionCont,
  dailyBestSellsCont,
  dailyBestSellsNature,
} from "../../style/pages/home/dailyBestSells";
import { MdKeyboardArrowRight } from "react-icons/md";
import useUpdateScrollPosition from "../../hooks/useUpdateScrollPosition";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { hide, show } from "../../style/global";

const DailyBestSells = () => {
  const [productType, setProductType] = useState("Featured");
  const [mouseEnter, setMouseEnter] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const [handleBackwardClick, handleForwardClick] = useUpdateScrollPosition({
    ref,
  });

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
        className={css(flex.raw({ columnGap: "xlg" }), {
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
          className={css(dailyBestSellsCardSectionCont)}
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
        >
          <div
            ref={ref}
            className={css(
              flex.raw({ columnGap: "lg", type: "startY" }),
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

            <span
              onClick={handleBackwardClick}
              className={css(
                dailyBestSellsCardNavigation,
                mouseEnter ? show : hide,
                {
                  left: "1rem",
                }
              )}
            >
              <MdKeyboardArrowLeft />
            </span>
            <span
              onClick={handleForwardClick}
              className={css(
                dailyBestSellsCardNavigation,
                mouseEnter ? show : hide,
                {
                  right: "1rem",
                }
              )}
            >
              <MdKeyboardArrowRight />
            </span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default DailyBestSells;
