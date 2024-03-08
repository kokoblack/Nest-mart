import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import FeaturedSmallCards from "../../components/home/FeaturedSmallCards";
import FeaturedBigCard from "../../components/home/FeaturedBigCard";
import { data } from "../../data/featuredSmallCard";

const FeaturedCategories = () => {
  const link = ["Cake & Milk", "Coffes & Teas", "Pet Foods", "Vegetables"];
  const title = [
    "Everyday Fresh & Clean with Our Products",
    "Make your Breakfast Healthy and Easy",
    "The best Organic Products Online",
  ];
  return (
    <section>
      <section>
        <h3>Featured Categories</h3>
        <nav>
          <ul>
            {link.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </nav>
        <div>
          <span>
            <TiArrowLeft />
          </span>
          <span>
            <TiArrowRight/>
          </span>
        </div>
      </section>

      <section>
        <FeaturedSmallCards
          img={data[0].img}
          name={data[0].name}
          qty={data[0].qty}
          bg={data[0].bg}
        />
      </section>

      <section>
        <FeaturedBigCard title={title[0]} num={1}/>
        <FeaturedBigCard title={title[1]} num={2}/>
        <FeaturedBigCard title={title[2]} num={3}/>
      </section>
    </section>
  );
};

export default FeaturedCategories;
