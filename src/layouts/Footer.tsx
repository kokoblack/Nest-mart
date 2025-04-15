import logo from "../assets/Header.png";
import { FiPhoneCall } from "react-icons/fi";
import { BsGooglePlay,BsApple } from "react-icons/bs";
import { account, company, corporate, icon, info, popular } from "../data/footer";
import payment from "../assets/payment-method.png.png";
import Support from "../components/layouts/Support";
import DownloadCard from "../components/layouts/DownloadCard";
import { css } from "../../styled-system/css";
import { flex } from "../style/recipe/flex";
import { contactContainer, copyRight, footerContainer, sectionOne, sectionTwo, socials, socialsIcons } from "../style/layout/footer/footer";
import FooterInfo from "../components/layouts/FooterInfo";

const Footer = () => {
  return (
    <footer className={css(footerContainer)}>
      <section className={css(flex.raw({type: 'spaceBetweenStart', wrap: 'yes', gap: 'lg'}), sectionOne)}>
        <section >
          <figure >
            <img src={logo} alt="logo" className={css({mx: ['auto', 'auto', '0']})}/>
          </figure>
          <p className={css({my: '1.5rem', fontSize: '1.1rem'})}>Awesome grocery store website <br/>template</p>
          {info.map((data, index) => (
            <div key={index} className={css(flex.raw({columnGap: 'sm', type: 'startX'}), contactContainer)}>
              <span className={css({color: 'primary.100'})}>{data.icon}</span>
              <p>{data.text}</p>
            </div>
          ))}
        </section>

        <FooterInfo text="Company" list={company}/>
        <FooterInfo text="Account" list={account}/>
        <FooterInfo text="Corporate" list={corporate}/>
        <FooterInfo text="Popular" list={popular}/>

        <section>
          <h3 className={css({fontFamily: 'quicksand', fontSize: '1.5rem', fontWeight: 'bold', mb: '1rem'})}>Install App</h3>
          <p>From App Store or Google Play</p>
          <div className={css(flex.raw({columnGap: 'md'}), {mb: '2rem', mt: '.8rem'})}>
            <DownloadCard text="App Store" icon={<BsApple/>}/>
            <DownloadCard text="Google Play" icon={<BsGooglePlay/>}/>
          </div>
          <p>Secured Payment Gateways</p>
          <figure className={css({my: '.8rem'})}>
            <img src={payment} />
          </figure>
        </section>
      </section>

      <hr className={css({border: '1px solid #BCE3C9', my: '2rem'})}/>

      <section className={css(flex.raw({type: 'spaceBetween'}), sectionTwo)}>
        <p className={css(copyRight)}>
          © 2022, <span className={css({color: 'primary.100',})}>Nest</span> - HTML Ecommerce Template <br/> All rights reserved
        </p>

        <div className={css(flex.raw({columnGap: 'xlg'}))}>
          <Support
            phone="1900 - 6666"
            time="Working 8:00 - 22:00"
            icon={<FiPhoneCall />}
            iconColor="secondary.400"
          />
          <Support
            iconColor="secondary.400"
            phone="1900 - 8888"
            time="24/7 Support Center"
            icon={<FiPhoneCall />}
          />
        </div>

        <div>
          <div className={css(flex.raw({columnGap: 'sm', type: 'startX'}), socials)}>
            <p className={css({color: 'secondary.100', fontSize: ".9rem", mr: '.5rem', fontWeight: 'bold'})}>Follow us</p>
            {icon.map((icon, index) => (
              <span key={index} className={css(socialsIcons)}>{icon}</span>
            ))}
          </div>

          <p className={css({fontSize: ".8rem"})}>Up to 15% discount on your first subscribe</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
