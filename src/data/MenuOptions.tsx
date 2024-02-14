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
  name: String;
}[];

export const option: Option = [
  {
    icon: <RiHome2Line />,
    name: "Home",
  },
  {
    icon: <PiShoppingBagLight />,
    name: "Shop",
  },
  {
    icon: <HiOutlineHomeModern />,
    name: "Vendor",
  },
  {
    icon: <BiFoodMenu />,
    name: "Mega Menu",
  },
  {
    icon: <GrBlog />,
    name: "Blog",
  },
  {
    icon: <PiNotepad />,
    name: "Pages",
  },
  {
    icon: <IoLanguageOutline />,
    name: "Language",
  },
  {
    icon: <MdOutlineReviews />,
    name: "Reviews",
  },
  {
    icon: <MdOutlineNoFood />,
    name: "Brand",
  },
];
