import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type SmallNavOption = {
  icon: React.ReactNode;
  name: string;
  index: number;
}[];

export const smallNavOptions: SmallNavOption = [
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Home",
    index: 0
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "About",
    index: 1
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Shop",
    index: 2
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Vendor",
    index: 3
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Mega menu",
    index: 4
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Blog",
    index: 5
  },
  {
    icon: <MdOutlineKeyboardArrowDown />,
    name: "Pages",
    index: 6
  },
];
