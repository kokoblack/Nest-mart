import React from "react";
import { css } from "../../styled-system/css";
import { flex } from "../style/recipe/flex";
import { button } from "../style/recipe/button";

type DownloadCardProps = {
  text: string;
  icon: React.ReactNode;
};

const DownloadCard = ({ text, icon }: DownloadCardProps) => {
  return (
    <button
      className={button({bg: 'black', px: 'md', py: 'sm', columnGap: 'xsm'})}
    >
      <span className={css({fontSize: '1.5rem', w: 'fit-content'})}>{icon}</span>
      <div className={css({textAlign: 'left'})}>
        <p className={css({ fontSize: ".5rem", lineHeight: '.7rem' })}>Get It On</p>
        <p className={css({ fontSize: ".8rem", lineHeight: '1rem'  })}>{text}</p>
      </div>
    </button>
  );
};

export default DownloadCard;
