import { FaBeer, FaIdBadge, FaStore } from "react-icons/fa";
import Clients from "../Sections/Clients";
import Store from "../Sections/Store";
import Homes from "../Sections/Homes";

const sideBarLinks = [
  {
    idPath: "/",
    title: "Home",
    icon: <FaBeer />,
    component: <Homes />,
  },
  {
    idPath: "/clients",
    title: "Clientes",
    icon: <FaIdBadge />,
    component: <Clients />,
  },
  {
    idPath: "/store",
    title: "Tienda",
    icon: <FaStore />,
    component: <Store />,
  },
];

const navLink = {
  title: "GROW",
};

export { sideBarLinks, navLink };
