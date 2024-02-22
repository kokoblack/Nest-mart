import logo from "../assets/Header.png";
import { FiPhoneCall } from "react-icons/fi";
import { account, company, corporate, info, popular } from "../data/footer";
import payment from "../assets/payment-method.png.png";
import Support from "../components/Support";

const Footer = () => {
  return (
    <footer>
      <section>
        <section>
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <p>Awesome grocery store website template</p>
          {info.map((data, index) => (
            <div key={index}>
              <span>{data.icon}</span>
              <p>{data.text}</p>
            </div>
          ))}
        </section>

        <section>
          <h3>Company</h3>
          <nav>
            <ul>
              {company.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </nav>
        </section>

        <section>
          <h3>Account</h3>
          <nav>
            <ul>
              {account.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </nav>
        </section>

        <section>
          <h3>Corporate</h3>
          <nav>
            <ul>
              {corporate.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </nav>
        </section>

        <section>
          <h3>Popular</h3>
          <nav>
            <ul>
              {popular.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </nav>
        </section>

        <section>
          <h3>Install App</h3>
          <p>From App Store or Google Play</p>
          <div>ghgghg</div>
          <p>Secured Payment Gateways</p>
          <figure>
            <img src={payment} />
          </figure>
        </section>
      </section>

      <hr />

      <section>
        <small>
          © 2022, Nest - HTML Ecommerce Template <br/> All rights reserved
        </small>

        <div>
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
          <div>
            <p>Follow us</p>
            <div></div>
          </div>

          <p>Up to 15% discount on your first subscribe</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
