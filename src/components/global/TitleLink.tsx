import React, { useState } from 'react'
import { css } from '../../../styled-system/css';
import { flex } from '../../style/recipe/flex';
import { titleLinkContainer } from '../../style/component/global/titleLink';

type TitleLinkProps = {
  title: string
  link: string[]
  setProductType: React.Dispatch<React.SetStateAction<string>>
}

const TitleLink = ({title, link, setProductType}: TitleLinkProps) => {
  const [active, setActive] = useState(0);


  return (
    <section className={css(flex.raw({type: 'endY', columnGap: "xlg",}), titleLinkContainer)}>
        <h3 className={css({lineHeight: '2rem'})}>{title}</h3>
        <nav
          className={css(
            { ml: [undefined, undefined, undefined, undefined, "auto"] },
            flex.raw()
          )}
        >
          <ul
            className={css(flex.raw({ columnGap: "md" }), {
              fontSize: [".8rem", ".8rem", ".8rem", ".9rem", ".9rem"],
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
      </section>
  )
}

export default TitleLink