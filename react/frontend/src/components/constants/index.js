import { FaWhatsapp, FaBeer, FaHouseUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import ClientsWrapper from "../Sections/Clients/ClientsWrapper";
import WhatsAppMsg from "../Sections/WhatsAppMsg";

const sideBarLinks = [
  {
    idPath: "/clients",
    title: "Home",
    icon: <FaHouseUser />,
    component: <ClientsWrapper />,
  },
  {
    idPath: "/whatsapp",
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    component: <WhatsAppMsg />,
  },
];

const navLink = {
  title: "GROW",
  icon: <FiMenu size={25} />,
};

export { sideBarLinks, navLink };
