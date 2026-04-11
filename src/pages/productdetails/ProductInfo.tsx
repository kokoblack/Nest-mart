import { FaStar } from "react-icons/fa";
import img2 from "../../assets/Article3.jpg";
import img3 from "../../assets/Article4.jpg";
import img4 from "../../assets/Article5.jpg";
import img5 from "../../assets/Article6.jpg";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import {
  prodInfoCont,
  prodInfoCurPrice,
  prodInfoDetail,
  prodInfoDetailSec,
  prodInfoFirstSec,
  prodInfoInitprice,
  prodInfoMainImg,
  prodInfoName,
  prodInfoOffPrice,
  prodInfoRating,
  prodInfoReview,
  prodInfoSalesOff,
  prodInfoSecondCont,
  prodInfoSecondContImg,
  prodInfoSizeCont,
} from "../../style/pages/productdetail/productInfo";
import ProductInfoType from "../../components/productdetail/ProductInfoType";
import CartButton from "../../components/productdetail/CartButton";
import { useProductDetailStore } from "../../redux/ProductDetailsReducer";

const ProductInfo = () => {
  const {name, img, initPrice, curtPrice} = useProductDetailStore()
  return (
    <section className={css(prodInfoCont)}>
        <section
          className={css(
            flex.raw({ columnGap: "xlg", type: "startY" }),
            prodInfoFirstSec,
          )}
        >
          <figure>
            <img className={css(prodInfoMainImg)} src={img} alt="img" />
          </figure>

          <div className={css(prodInfoDetailSec)}>
            <p className={css(prodInfoSalesOff)}>Sales Off</p>
            <h3 className={css(prodInfoName)}>
              {name}
            </h3>
            <section
              className={css(flex.raw({ columnGap: "md", type: "startX" }))}
            >
              <div
                className={css(
                  flex.raw({ columnGap: "sm", type: "startX" }),
                  prodInfoRating,
                )}
              >
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
              </div>
              <p className={css(prodInfoReview)}>(32 reviews)</p>
            </section>

            <section
              className={css(flex.raw({ columnGap: "md", type: "startX" }))}
            >
              <p className={css(prodInfoCurPrice)}>${curtPrice}</p>
              <div>
                <p className={css(prodInfoOffPrice)}>26% off</p>
                <p className={css(prodInfoInitprice)}>${initPrice}</p>
              </div>
            </section>

            <p className={css(prodInfoDetail)}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              rem officia, corrupti reiciendis minima nisi modi, quasi, odio
              minus dolore impedit fuga eum eligendi.
            </p>

            <section
              className={css(
                flex.raw({ columnGap: "md", type: "startX" }),
                prodInfoSizeCont,
              )}
            >
              <p>size/Weight:</p>
              <p>50g</p>
              <p>60g</p>
              <p>80g</p>
              <p>100g</p>
              <p>150g</p>
            </section>

            <section
              className={css(flex.raw({ columnGap: "lg", type: "startX" }), {
                hideBelow: "480px",
              })}
            >
              <CartButton />
            </section>
          </div>
        </section>

        <section
          className={css(
            flex.raw({ columnGap: "lg", type: "startX" }),
            prodInfoSecondCont,
          )}
        >
          <section
            className={css(
              flex.raw({ columnGap: "lg", type: "startX" }),
              prodInfoSecondContImg,
            )}
          >
            <figure>
              <img src={img2} alt="img" />
            </figure>

            <figure>
              <img src={img3} alt="img" />
            </figure>

            <figure>
              <img src={img4} alt="img" />
            </figure>

            <figure>
              <img src={img5} alt="img" />
            </figure>
          </section>

          <ProductInfoType />
        </section>
    </section>
  );
};

export default ProductInfo;
