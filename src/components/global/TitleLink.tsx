import React, { useState } from "react";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import {
  titleHeaderCont,
  titleLinkContainer,
} from "../../style/component/global/titleLink";

type TitleLinkProps = {
  title: string;
  link: string[];
  setProductType: React.Dispatch<React.SetStateAction<string>>;
};

const TitleLink = ({ title, link, setProductType }: TitleLinkProps) => {
  const [active, setActive] = useState(0);

  return (
    <section
      className={css(
        flex.raw({ type: "endY", columnGap: "xlg" }),
        titleLinkContainer
      )}
    >
      <div
        className={css(
          flex.raw({ columnGap: "md", type: "endY" }),
          titleHeaderCont
        )}
      >
        <h3 className={css({ lineHeight: "2rem" })}>{title}</h3>

        <p
          className={css({
            cursor: "pointer",
            fontSize: ".9rem",
            fontWeight: "500",
            color: "secondary.700",
            ml: "auto",
            hideFrom: "993px",
          })}
        >
          See All
        </p>
      </div>

      <nav
        className={css(
          { ml: [undefined, undefined, undefined, undefined, "auto"] },
          flex.raw()
        )}
      >
        <ul
          className={css(flex.raw({ columnGap: "md" }), {
            fontSize: ".9rem",
            fontWeight: "500",
          })}
        >
          {link.map((data, index) => (
            <li
              onClick={() => {
                setActive(index);
                setProductType(data);
              }}
              key={index}
              className={css({
                color: active === index ? "primary.100" : "null",
                cursor: "pointer",
              })}
            >
              {data}
            </li>
          ))}
        </ul>
      </nav>

      <p
        className={css({
          cursor: "pointer",
          fontSize: ".9rem",
          fontWeight: "500",
          color: "secondary.700",
          hideBelow: "992px",
        })}
      >
        See All
      </p>
    </section>
  );
};

export default TitleLink;
