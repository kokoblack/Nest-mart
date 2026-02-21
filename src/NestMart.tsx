import { useEffect, useRef, useState } from "react";
import TopNavBar from "./layouts/TopNav";
import SmallNav from "./layouts/SmallNav";
import Footer from "./layouts/Footer";
import { css } from "../styled-system/css";
import { paddingView } from "./style/global";
import MobileMenuSearch from "./components/layouts/MobileMenuSearch";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import ErrorPage from "./pages/error/ErrorPage";
import ProductDetail from "./pages/productdetails/ProductDetail";
import Wishlist from "./pages/wishlist/Wishlist";

function NestMart() {
  const divRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(0);

  useEffect(() => {
    setSticky(divRef.current?.offsetHeight!);

    const handleScroll = () => {
      if (window.scrollY >= sticky!) {
        divRef.current?.classList.add("sticky");
      } else {
        divRef.current?.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [divRef.current?.offsetHeight]);

  return (
    <BrowserRouter>
      <div className={css(paddingView, { position: "relative" })}>
        <div
          ref={divRef}
          className={css({
            top: 0,
            bg: "secondary.500",
            zIndex: "50",
          })}
        >
          <TopNavBar />
          <SmallNav />
          <section className={css({ py: ".5rem", borderBottom: "1px solid #dedfe2", hideFrom: "769px", })}>
            <MobileMenuSearch />
          </section>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/errorV" element={<ErrorPage />} />
          <Route path="/errorM" element={<ErrorPage />} />
        </Routes>
        <Footer /> 
      </div>
    </BrowserRouter>

  );
}

export default NestMart;
