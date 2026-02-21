import { css } from "../../../styled-system/css";
import { productDescriptionCont, productDescriptionHeading, productDescriptionInfo, productDescriptionTags } from "../../style/pages/productdetail/productDescription";
import { flex } from "../../style/recipe/flex";

const ProductDescription = () => {
  return (
    <section className={css(productDescriptionCont)}>
      <div className={css(flex.raw({columnGap: "md"}), productDescriptionTags)}>
        <p>Description</p>
        <p>Reviews (3)</p>
        <p>Additional info</p>
        <p>Vendor</p>
      </div>

      <p>
        Uninhibited carnally hired played in whimpered dear gorilla koala
        depending and much yikes off far quetzal goodness and from for grimaced
        goodness unaccountably and meadowlark near unblushingly crucial scallop
        tightly neurotic hungrily some and dear furiously this apart. <br/> 
        Spluttered narrowly yikes left moth in yikes bowed this that grizzly
        much hello on spoon-fed that alas rethought much decently richly and wow
        against the frequent fluidly at formidable acceptably flapped besides
        and much circa far over the bucolically hey precarious goldfinch
        mastodon goodness gnashed a jellyfish and one however because.
      </p>

      <div className={css(productDescriptionInfo, flex.raw({ columnGap: "xlg", type: "startX"}))}>
        <ul >
          <li>Type Of Packing</li>
          <li>Color</li>
          <li>Quantity Per Case</li>
          <li>Ethyl Alcohol</li>
          <li>Piece In One</li>
        </ul>

        <div>
          <p>Bottle</p>
          <p>Green, Pink</p>
          <p>100ml</p>
          <p>70%</p>
          <p>Carton</p>
        </div>
      </div>

      <hr />

      <p>
        Laconic overheard dear woodchuck wow this outrageously taut beaver hey
        hello far meadowlark imitatively egregiously hugged that yikes minimally
        unanimous pouted flirtatiously as beaver beheld above forward energetic
        across this jeepers beneficently cockily less a the raucously that magic
        upheld far so the this where crud then below after jeez enchanting
        drunkenly more much wow callously irrespective limpet.
      </p>

      <h3>Packaging & Delivery</h3>

      <hr />

      <p>
        Less lion goodness that euphemistically robin expeditiously bluebird
        smugly scratched far while thus cackled sheepishly rigid after due one
        assenting regarding censorious while occasional or this more crane went
        more as this less much amid overhung anathematic because much held one
        exuberantly sheep goodness so where rat wry well concomitantly.
      </p>
      <p>
        Scallop or far crud plain remarkably far by thus far iguana lewd
        precociously and and less rattlesnake contrary caustic wow this near
        alas and next and pled the yikes articulate about as less cackled
        dalmatian in much less well jeering for the thanks blindly sentimental
        whimpered less across objectively fanciful grimaced wildly some wow and
        rose jeepers outgrew lugubrious luridly irrationally attractively
        dachshund.
      </p>

      <div className={css(productDescriptionHeading)}>
        <h3>Suggested Use</h3>
        <p>Refrigeration not necessary.</p>
        <p>Stir before serving</p>
      </div>

      <div className={css(productDescriptionHeading)}>
        <h3>Other Ingredients</h3>
        <p>Organic raw pecans, organic raw cashews.</p>
        <p>
          This butter was produced using a LTG (Low Temperature Grinding)
          process
        </p>
        <p>
          Made in machinery that processes tree nuts but does not process
          peanuts, gluten, dairy or soy
        </p>
      </div>

      <div className={css(productDescriptionHeading)}>
        <h3>Warnings</h3>
        <p>Oil separation occurs naturally. May contain pieces of shell.</p>
      </div>
    </section>
  );
};

export default ProductDescription;
