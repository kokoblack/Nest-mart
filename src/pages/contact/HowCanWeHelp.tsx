import { css } from "../../../styled-system/css"
import { howCanWeHelpArticleCont, howCanWeHelpCont, howCanWeHelpFirstSection, howCanWeHelpSecondSection, howCanWeHelpThirdSection } from "../../style/pages/contact/howCanWeHelp"
import { flex } from "../../style/recipe/flex"


const HowCanWeHelp = () => {
    return (
        <section className={css(howCanWeHelpCont)}>
            <h2>How Can We Help You?</h2>

            <section className={css(flex.raw({columnGap: "md", type: "startY"}), howCanWeHelpArticleCont)}>
            <section className={css(howCanWeHelpFirstSection)}>
                <article>
                <h3>Let us know how we can help you</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.</p>
                </article>

            </section>
            <section className={css(howCanWeHelpSecondSection)}>
                <article>
                    <h2>01. Visit Feedback</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                </article>
                <article>
                    <h2>03. Billing Inquiries</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                </article>
            </section>
            <section className={css(howCanWeHelpThirdSection)}>
                <article>
                    <h2>02. Employer Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                </article>
                <article>
                    <h2>04. General Inquiries</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                </article>
            </section>
            </section>

           
        </section>
    )
}

export default HowCanWeHelp