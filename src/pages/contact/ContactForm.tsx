import { css } from "../../../styled-system/css";
import main3 from "../../assets/main3.png";
import {
  contactFormArticle,
  contactFormButon,
  contactFormCont,
  contactFormFieldset,
  contactFormFirstSection,
  contactFormSecondSection,
} from "../../style/pages/contact/contactForm";
import { button } from "../../style/recipe/button";
import { flex } from "../../style/recipe/flex";

const ContactForm = () => {
  return (
    <section className={css(contactFormCont)}>
      <h2>Contact form</h2>

      <div
        className={css(
          flex.raw({ type: "spaceBetweenStart", columnGap: "lg" })
        )}
      >
        <section className={css(contactFormFirstSection)}>
          <article className={css(contactFormArticle)}>
            <h3>Drop us a line</h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </article>

          <form>
            <fieldset
              className={css(
                flex.raw({ wrap: "yes", columnGap: "md", type: "topLeft" }),
                contactFormFieldset
              )}
            >
              <input type="text" placeholder="First Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="email" placeholder="Your Phone" required />
              <input type="text" placeholder="Subject" required />
              <textarea required></textarea>

              <button
                className={css(
                  button.raw({ bg: "darkBlue", fontSize: "lg", px: "xl" }), contactFormButon
                )}
              >
                Send message
              </button>
            </fieldset>
          </form>
        </section>

        <section className={css(contactFormSecondSection)}>
          <figure>
            <img src={main3} alt="" />
          </figure>
        </section>
      </div>
    </section>
  );
};

export default ContactForm;
