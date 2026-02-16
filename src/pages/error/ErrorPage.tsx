import { Link } from "react-router-dom";
import img from "../../assets/cookie.jpg";
import { IoReturnDownBack } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <main>
      <section>
        <p>4</p>

        <figure>
          <img src={img} alt="image" />
        </figure>

        <p>4</p>
      </section>

      <section>
        <h3>Oops! Pag not found</h3>

        <p>
          It's looking like you may have taken a wrong turn. Don't worry...it
          happens to the bes of us. Here's a little tip that might help you get
          back on track.
        </p>

        <Link to="/">
          <i>
            <IoReturnDownBack />
          </i>
          <p>Back to main</p>
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
