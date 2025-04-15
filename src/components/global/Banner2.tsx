import { IoCloseOutline } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { css } from "../../../styled-system/css";
import {
  banner2Container,
  banner2firstSection,
  banner2SecondSection,
  banner2tag,
} from "../../style/component/global/banner2";
import { flex } from "../../style/recipe/flex";


const Banner2 = ({text}: {text: string}) => {
  const location = useLocation();
  console.log(location.pathname, "location");
  const cat = ["Shopping", "Recips", "Kitchen", "News", "Food"];
  return (
    <section className={css(banner2Container, flex.raw({type: "spaceBetween",}))}>
      <section className={css(banner2firstSection)}>
        <h3>{text}</h3>
        <div className={css({ fontSize: ".875rem" }, flex.raw({type: "startX", columnGap: "md"}))}>
          <div className={css(flex.raw({columnGap: "xsm"}), { color: "primary.100" })}>
            <span>
              <BiHomeAlt />
            </span>
            <Link to="/">Home</Link>
          </div>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <p>{text}</p>
        </div>
      </section>

      <section className={css(flex.raw({columnGap: "md", wrap: "yes", type: "startX"}), banner2SecondSection)}>
        {cat.map((text, index) => (
          <div key={index} className={css(banner2tag, flex.raw({columnGap: "sm"}))}>
            <span >
              <IoCloseOutline />
            </span>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Banner2;
