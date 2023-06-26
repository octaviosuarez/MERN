import { Link } from "react-router-dom";
import { sideBarLinks } from "../constants";

const SideBar = () => {
  return (
    <div>
      <ul>
        {sideBarLinks.map((i, index) => (
          <li>
            <Link to={i.idPath}>
              <div className="flex">
                <div className="mt-1">{i.icon}</div>
                <div className="ml-1">{i.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
