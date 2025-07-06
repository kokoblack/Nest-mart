import { css } from "../../../styled-system/css";
import {
  blogContentCat,
  blogContentContainer,
  blogContententTitle,
  blogContentHide,
  blogContentSortContainer,
} from "../../style/component/blog/blogContent";
import { flex } from "../../style/recipe/flex";
import { blogdatatype1 } from "../../type/types";

const BlogContent = ({
  img,
  date,
  views,
  readTime,
  title,
  category,
}: blogdatatype1) => {
  return (
    <section
      className={css(blogContentContainer, flex.raw({ vertical: "vertical" }))}
    >
      <figure>
        <img src={img} alt="pic" />
      </figure>

      <div className={css({ textAlign: "center", mt: "1.5rem" })}>
        <p className={css(blogContentCat)}>{category}</p>
        <h3 className={css(blogContententTitle)}>{title}</h3>
        <div className={css(blogContentSortContainer, flex.raw({ gap: "md" }))}>
          <p>
            {date?.toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className={css({ color: "#D2D2D2" })}>•</p>
          <p>{views}k Views</p>
          <p className={css({ color: "#D2D2D2" }, blogContentHide)}>•</p>
          <p className={css(blogContentHide)}>{readTime} mins read</p>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
