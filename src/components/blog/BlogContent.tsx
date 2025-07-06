import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { blogdatatype1 } from "../../type/types";

const BlogContent = ({img, date, views, readTime, title, category}: blogdatatype1) => {
  return (
    <section className={css({w: 'fit-content', fontWeight: "500"})}>
      <figure>
        <img src={img} alt="pic1" />
      </figure>

      <div className={css({textAlign: 'center', mt: "1rem"})}>
        <p className={css({fontSize: ".85rem", color: "secondary.700", fontWeight: "700"})}>{category}</p>
        <h3 className={css({fontSize: "1.5rem", color: "secondary.100", fontWeight: "700"})}>{title}</h3>
        <div className={css({fontSize: ".8rem", color: "secondary.400"}, flex.raw({gap: "md"}))}>
          <p>{date?.toLocaleString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})}</p>
          <p className={css({color: "#D2D2D2"})}>•</p>
          <p>{views}</p>
          <p className={css({color: "#D2D2D2"})}>•</p>
          <p>{readTime}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
