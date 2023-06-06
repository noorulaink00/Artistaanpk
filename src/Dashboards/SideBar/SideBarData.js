import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import { IconContext } from "react-icons";

export const SideBarForAdmin = [
  {
    title: " Dashboard",
    icon: <FaIcons.FaHouseUser />,
    link: "/adminDash",
  },
  {
    title: "Seller Forms",
    icon: <MdIcons.MdSell />,
    link: "/adminSellerForms",
  },
  {
    title: " Vendors",
    icon: <FaIcons.FaUsers />,
    link: "/vendorlist",
  },
  {
    title: " Products List",
    icon: <FaIcons.FaProductHunt />,
    link: "/productlist",
  },
  {
    title: " Orders List",
    icon: <FaIcons.FaListUl />,
    link: "/orderlist",
  },

  {
    title: " Complaints",
    icon: <MdIcons.MdReportProblem />,
    link: "/complaints",
  },
  /*
  {
   title: " SignOut",
    icon: <AiIcons.AiOutlineLogout />,
    link: "/login",
  },*/
];

export const SideBarForUser = [
  {
    title: " Dashboard",
    icon: <FaIcons.FaHouseUser />,
    link: "/customerDash",
  },
  {
    title: "My Cart",
    icon: <FaIcons.FaProductHunt />,
    link: "/mycart",
  },
  {
    title: "My Orders",
    icon: <MdIcons.MdSell />,
    link: "/myorders",
  },
  {
    title: " My Profile",
    icon: <FaIcons.FaUsers />,
    link: "/userprofile",
  },
];

export const SideBarForSeller = [
  {
    title: " Main ",
    icon: <FaIcons.FaHouseUser />,
    link: "/sellerDash",
  },
  {
    title: "My Products",
    icon: <FaIcons.FaProductHunt />,
    link: "/sellerproducts",
  },
  {
    title: "Paintings",
    icon: <MdIcons.MdSell />,
    link: "/sellerpaintings",
  },
  {
    title: " My Orders",
    icon: <FaIcons.FaListUl />,
    link: "/sellerorders",
  },
];
