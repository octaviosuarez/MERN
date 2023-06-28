import { Link } from "react-router-dom";
import { sideBarLinks } from "../constants";

const SideBar = () => {
  return (
    <div>
      <ul>
        {sideBarLinks.map((i, index) => (
          <li>
            <Link to={i.idPath}>
              <div className="flex py-2 px-2 rounded-sm hover:bg-[#F1F5F9]">
                <div className="mt-1 text-black">{i.icon}</div>
                <div className="ml-1 text-black">{i.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
