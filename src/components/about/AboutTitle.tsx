import { css } from "../../../styled-system/css";
import { zigzagLiine } from "../../style/global";
import { flex } from "../../style/recipe/flex";

const AboutTitle = ({ title }: { title: string }) => {
  return (
    <div
      className={css({
        textAlign: "center",
        color: "secondary.100",
        position: "relative",
      })}
    >
      <h3
        className={css({
          fontWeight: "bold",
          fontSize: ["1.8rem", "1.8rem", "2.5rem", "2.5rem"],
        })}
      >
        {title}
      </h3>
      <div className={css(flex.raw())}>
        <div className={css(flex.raw())}>
          <div className="zigzag1"></div>
          <div className="zigzag2"></div>
        </div>
        <div className={css(flex.raw())}>
          <div className="zigzag1"></div>
          <div className="zigzag2"></div>
        </div>
        <div className={css(flex.raw())}>
          <div className="zigzag1"></div>
          <div className="zigzag2"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutTitle;
