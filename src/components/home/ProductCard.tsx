import img from "../../assets/Link → product-1-1.jpg.jpg";
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import { productCardContainer, productCardImg } from "../../style/component/home/productCard";
import { flex } from "../../style/recipe/flex";
import { button } from "../../style/recipe/button";

const ProductCard = () => {
  return (
    <div className={css(productCardContainer)}>
      <figure className={css(productCardImg)}>
        <img src={img} alt="product" />
      </figure>

      <p className={css({fontSize: '.7rem', color: 'secondary.1300', mb: '.5rem'})}>Snacks</p>
      <p className={css({fontSize: '.95rem', lineHeight: '1rem', color: 'secondary.100', fontWeight: 'bold'})}>Seeds of Change Organic Quinoa, Brown, & Red Rice</p>
      <div className={css(flex.raw({type: 'startX', columnGap: 'sm'}), {my: '.2rem'})}>
        <span className={css({color: 'yellow'}, flex.raw({columnGap: 'sm',}))}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <p >(4.0)</p>
      </div>
      <p>By <span className={css({color: 'primary.100', fontWeight: 'bold'})}>NestFood</span> </p>

      <div className={css(flex.raw({columnGap: 'md'}), {fontWeight: 'bold', mt: '.8rem'})}>
        <p className={css({color: 'primary.100', fontSize: '1.05rem'})}>$28.85</p>
        <p className={css({color: 'secondary.1300', textDecoration: 'line-through'})}>$32.8</p>
        <button className={css(button.raw({bg: 'lightGreen', color: 'green', px: 'lg', py: 'sm', fontSize: 'md'}), {ml: 'auto'})}>
          <span className={css({fontSize: '1.2rem'})}>
            <IoCartOutline />
          </span>
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
