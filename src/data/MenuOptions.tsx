import { RiHome2Line } from "react-icons/ri";
import { PiShoppingBagLight } from "react-icons/pi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BiFoodMenu } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { PiNotepad } from "react-icons/pi";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineNoFood } from "react-icons/md";
import React from "react";

type Option = {
  icon: React.ReactNode;
  name: string;
  index: number;
}[];

export const option: Option = [
  {
    icon: <RiHome2Line />,
    name: "Home",
    index: 0,
  },
  {
    icon: <PiShoppingBagLight />,
    name: "Shop",
    index: 1,
  },
  {
    icon: <HiOutlineHomeModern />,
    name: "Vendor",
    index: 2,
  },
  {
    icon: <BiFoodMenu />,
    name: "Mega Menu",
    index: 3,
  },
  {
    icon: <GrBlog />,
    name: "Blog",
    index: 4,
  },
  {
    icon: <IoLanguageOutline />,
    name: "Language",
    index: 5,
  },
  {
    icon: <MdOutlineReviews />,
    name: "Reviews",
    index: 6,
  },
  {
    icon: <MdOutlineNoFood />,
    name: "Brand",
    index: 7,
  },
  {
    icon: <PiNotepad />,
    name: "Contact",
    index: 8,
  },
];
