import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type SmallNavOption = {
  icon: React.ReactNode;
  name: string;
  index: number;
  path: string
}[];

export const smallNavOptions: SmallNavOption = [
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Home",
    index: 0,
    path: "/"
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "About",
    index: 1,
    path: "about"
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Shop",
    index: 2,
    path: "/"
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Vendor",
    index: 3,
    path: "/"
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Mega menu",
    index: 4,
    path: "/"
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Blog",
    index: 5,
    path: "blog"
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Contact",
    index: 6,
    path: "/"
  },
];
