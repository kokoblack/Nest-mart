import { Link } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
import { css } from "../../../styled-system/css";
import {
  errorLink,
  errorMainCont,
} from "../../style/pages/errorpage/errorPage";

const ErrorPage = () => {
  return (
    <main>
      <div className={css(errorMainCont)}>
        <h5>404</h5>

        <h3>Oops! Page not found</h3>

        <p>
          It's looking like you may have taken a wrong turn. Don't worry...it
          happens to the best of us. Here's a little tip that might help you 
          get back on track.
        </p>

        <Link to="/" className={css(errorLink)}>
          <i>
            <IoReturnDownBack />
          </i>
          <p>Back to main</p>
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
