import { navLink } from "../constants";

const NavBar = () => {
  return (
    <div className="flex gap-4">
      <div className="pt-0.5 cursor-pointer">{navLink.icon}</div>
      <p className="font-bold text-xl">{navLink.title}</p>
    </div>
  );
};

export default NavBar;
