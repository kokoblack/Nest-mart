import {
  locationCont,
  locationSecondSection,
  locationSecondSectionContent,
} from "../../style/pages/contact/location";
import { css } from "../../../styled-system/css";
import { SlLocationPin } from "react-icons/sl";
import { button } from "../../style/recipe/button";
import { flex } from "../../style/recipe/flex";

export const Location = () => {
  const branch = ["Office", "Studio", "Shop"];
  return (
    <section className={css(locationCont)}>
      <section>
        <iframe
          className={css({ rounded: "10px" })}
          width="100%"
          height="350"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=205%20North%20Michigan%20Avenue,%20Suite%20810+(Nest Mart & Gocery Office)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </section>
      <section className={css(flex.raw({}), locationSecondSection)}>
        {branch.map((branch, index) => (
          <article key={index} className={css(locationSecondSectionContent)}>
            <h2>{branch}</h2>

            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@Evara.com</p>

            <button
              className={css(
                button.raw({ px: "lg", py: "md", fontSize: "md" }),
                { mt: "1rem", fontWeight: "bold" }
              )}
            >
              <span>
                <SlLocationPin />
              </span>
              <p>View map</p>
            </button>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Location;
