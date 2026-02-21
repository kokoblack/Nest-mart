import ContactForm from "./ContactForm";
import HowCanWeHelp from "./HowCanWeHelp";
import Location from "./Location";
import { css } from "../../../styled-system/css";
import Banner from "../../components/global/Banner";

const Contact = () => {
  return (
    <main>
      <HowCanWeHelp />
      <Location />
      <ContactForm />

      <section
        className={css({
          pt: ["2rem", "2rem", "2rem", "4rem"],
          pb: ["0rem", "0rem", "0rem", "2rem"],
        })}
      >
        <Banner id={0} />
      </section>
    </main>
  );
};

export default Contact;
