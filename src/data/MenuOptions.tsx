import { RiHome2Line } from "react-icons/ri";
import { PiShoppingBagLight } from "react-icons/pi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BiFoodMenu } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { PiNotepad } from "react-icons/pi";
import { MdOutlineNoFood } from "react-icons/md";
import React from "react";

type Option = {
  icon: React.ReactNode;
  name: string;
  index: number;
  path: string
}[];

export const option: Option = [
  {
    icon: <RiHome2Line />,
    name: "Home",
    index: 0,
    path: "/"
  },
  {
    icon: <PiShoppingBagLight />,
    name: "Shop",
    index: 1,
    path: "shop"
  },
  {
    icon: <HiOutlineHomeModern />,
    name: "Vendor",
    index: 2,
    path: "errorV"
  },
  {
    icon: <BiFoodMenu />,
    name: "Mega Menu",
    index: 3,
    path: "errorM"
  },
  {
    icon: <GrBlog />,
    name: "Blog",
    index: 4,
    path: "blog"
  },
  {
    icon: <MdOutlineNoFood />,
    name: "About",
    index: 7,
    path: "about"
  },
  {
    icon: <PiNotepad />,
    name: "Contact",
    index: 8,
    path: "contact"
  },
];
