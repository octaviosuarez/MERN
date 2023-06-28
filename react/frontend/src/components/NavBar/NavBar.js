import { navLink } from "../constants";

const NavBar = () => {
  return (
    <div className="flex gap-3">
      <div className="pt-1 cursor-pointer">{navLink.icon}</div>
      <p className="font-bold">{navLink.title}</p>
    </div>
  );
};

export default NavBar;
