import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { sideBarLinks } from "../constants";

const Home = () => {
  return (
    <Router>
      <div className="py-[1rem] px-[2rem] bg-[#1C2434] text-white">
        <NavBar />
      </div>
      <div className="flex">
        <div className="w-[12rem] h-[calc(100vh-52px)] border-r border-black-100 bg-[#1C2434]">
          <SideBar />
        </div>
        {sideBarLinks.map((i, index) => (
          <Routes>
            <Route exact={true} path={i.idPath} element={i.component} />
          </Routes>
        ))}
      </div>
    </Router>
  );
};

export default Home;
