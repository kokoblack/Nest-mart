import { css } from "../../../styled-system/css";
import {
  ourTeamCardCont,
  ourTeamCardDetailsCont,
  ourTeamCardDetailsIconCont,
  ourTeamCardImg,
} from "../../style/component/about/ourTeamCard";
import { flex } from "../../style/recipe/flex";
import {
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandYoutubeFilled,
  TbBrandXFilled,
} from "react-icons/tb";

type OurTeamCardProps = {
  img: string;
  name: string;
  title: string;
};

const OurTeamCard = ({ img, name, title }: OurTeamCardProps) => {
  return (
    <div className={css(ourTeamCardCont)}>
      <figure className={css(ourTeamCardImg)}>
        <img src={img} alt="image" />
      </figure>
      <div
        className={[css(ourTeamCardDetailsCont), "positionCenter"].join(" ")}
      >
        <h3>{name}</h3>
        <p>{title}</p>
        <div
          className={css(flex.raw({ gap: "lg" }), ourTeamCardDetailsIconCont)}
        >
          <span>
            <TbBrandFacebookFilled />
          </span>
          <span>
            <TbBrandXFilled />
          </span>
          <span>
            <TbBrandInstagram />
          </span>
          <span>
            <TbBrandYoutubeFilled />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
