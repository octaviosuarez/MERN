import { navLink } from "../constants";

const NavBar = () => {
  return (
    <div>
      <p className="font-bold">{navLink.title}</p>
    </div>
  );
};

export default NavBar;
