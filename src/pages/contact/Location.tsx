import locationImg from '../../assets/contactMap.jpg' 
import { locationCont, locationSecondSection, locationSecondSectionContent } from '../../style/pages/contact/location'
import { css } from '../../../styled-system/css'
import { SlLocationPin } from "react-icons/sl";
import { button } from '../../style/recipe/button';
import { flex } from '../../style/recipe/flex';

export const Location = () => {
    const branch = ["Office", "Studio", "Shop"]
  return (
    <section className={css(locationCont)}>
        <section>
            <figure>
                <img src={locationImg} alt="map" />
            </figure>
        </section>
        <section className={css(flex.raw({}), locationSecondSection)}>
            {
                branch.map((branch, index) => (<article key={index} className={css(locationSecondSectionContent)} >
                    <h2>{branch}</h2>

                    <p>205 North Michigan Avenue, Suite 810</p>
                <p>Chicago, 60601, USA</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@Evara.com</p>

                <button className={css(button.raw({ px: "lg", py: "md", fontSize: "md"}), {mt: "1rem", fontWeight: "bold"})}>
                    <span><SlLocationPin /></span>
                    <p>View map</p>
                </button>
                </article>))
            }
        </section>
    </section>
  )
}

export default Location