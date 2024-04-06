import React from "react";
import { css } from "../../../styled-system/css";
import {
  WhatWeProvideCardCont,
  WhatWeProvideCardImg,
  WhatWeProvideCardText,
  WhatWeProvideCardText2,
  WhatWeProvideCardTitle,
} from "../../style/component/about/WhatWeProvideCard";

type WhatWeProvideCardProps = {
  img: string;
  title: string;
};

const WhatWeProvideCard = ({ img, title }: WhatWeProvideCardProps) => {
  return (
    <div className={css(WhatWeProvideCardCont)}>
      <figure className={css(WhatWeProvideCardImg)}>
        <img src={img} alt="icon" />
      </figure>
      <h3 className={css(WhatWeProvideCardTitle)}>{title}</h3>
      <p className={css(WhatWeProvideCardText)}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form
      </p>
      <p className={css(WhatWeProvideCardText2)}>Read more</p>
    </div>
  );
};

export default WhatWeProvideCard;
