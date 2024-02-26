import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Subscribe from "../../components/Subscribe";

const Hero = () => {
  return (
    <section>
        <h3>Fresh Vegetables</h3>
        <h3>Big discount</h3>
        <p>Save up to 50% off on your first order</p>

        <Subscribe/>

        <span><MdKeyboardArrowLeft/></span>
        <span><MdKeyboardArrowRight/></span>

        <div>
            <div></div>
            <div></div>
        </div>
    </section>
  )
}

export default Hero