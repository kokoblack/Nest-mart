import { useState } from "react";
import { css } from "../../../styled-system/css";
import {
  doubleSliderCont,
  doubleSliderInput,
  doubleSliderSecondSection,
  doubleSliderTracker,
} from "../../style/component/layouts/doubleSliderRange";
import { flex } from "../../style/recipe/flex";

const DoubleSliderRange = () => {
  const [minValue, setMinValue] = useState<number>(20);
  const [maxValue, setMaxValue] = useState<number>(80);
  const min = 0;
  const max = 100;
  const leftTrack = (minValue / max) * 100;
  const rightTrack = (maxValue / max) * 100;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <fieldset className={css()}>
      <section className={css(doubleSliderCont)}>
        <div
          className={css(doubleSliderTracker)}
          style={{
            background: `linear-gradient(to right, #D6D7D9 ${leftTrack}% , #3BB77E ${leftTrack}% , #3BB77E ${rightTrack}%, #D6D7D9 ${rightTrack}%)`,
          }}
        ></div>

        <input
          className={css(doubleSliderInput)}
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
        />

        <input
          className={css(doubleSliderInput)}
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
        />
      </section>
      <section className={css(doubleSliderSecondSection, flex.raw({type: "spaceBetween"}))}>
        <p>
          From: <span> ${minValue}</span>
        </p>
        <p>
          To: <span> ${maxValue}</span>
        </p>
      </section>
    </fieldset>
  );
};

export default DoubleSliderRange;
