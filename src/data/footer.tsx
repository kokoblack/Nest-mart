import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa6";
import { PiClockCountdownBold } from "react-icons/pi";
import {
  TbBrandXFilled,
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandYoutubeFilled,
} from "react-icons/tb";
import { BiMailSend } from "react-icons/bi";

type Info = {
  icon: React.ReactNode;
  text: string;
}[];

export const info: Info = [
  {
    icon: <CiLocationOn />,
    text: "Address: 5171 W Campbell Ave",
  },
  {
    icon: <TfiHeadphoneAlt />,
    text: "Call Us:(+91) - 540-025-124553",
  },
  {
    icon: <BiMailSend />,
    text: "Email:sale@Nest.com",
  },
  {
    icon: <PiClockCountdownBold />,
    text: "Hours:10:00 - 18:00, Mon - Sat",
  },
];

export const company = [
  "About Us",
  "Delivery Information",
  "Privacy Policy",
  "Terms & Conditions",
  "Contact Us",
  "Support Center",
  "Careers",
];

export const account = [
  "Sign In",
  "View Cart",
  "My Wishlist",
  "Track My Order",
  "Help Ticket",
  "Shipping Details",
  "Compare products",
];

export const corporate = [
  "Become a Vendor",
  "Affiliate Program",
  "Farm Business",
  "Farm Careers",
  "Our Suppliers",
  "Accessibility",
  "Promotions",
];

export const popular = [
  "Milk & Flavoured Milk",
  "Butter and Margarine",
  "Eggs Substitutes",
  "Marmalades",
  "Sour Cream and Dips",
  "Tea & Kombucha",
  "Cheese",
];

export const icon = [
  <TbBrandFacebookFilled />,
  <TbBrandXFilled />,
  <TbBrandInstagram />,
  <FaPinterestP />,
  <TbBrandYoutubeFilled />,
];
