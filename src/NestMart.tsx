import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { useEffect, useRef, useState } from "react";
import TopNavBar from "./layouts/TopNav";
import SmallNav from "./layouts/SmallNav";
import Footer from "./layouts/Footer";
import { css } from "../styled-system/css";
import { paddingView } from "./style/global";

function NestMart() {
  const divRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(0)

  useEffect(() => {
    setSticky(divRef.current?.offsetHeight!)
    
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
      </div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default NestMart;
