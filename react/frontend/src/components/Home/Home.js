import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { sideBarLinks } from "../constants";

const Home = () => {
  return (
    <Router>
      <div className="py-[1rem] px-[2rem] bg-white text-black border border-b-black-50">
        <NavBar />
      </div>
      <div className="flex">
        <div className="w-[16rem] h-[calc(100vh-52px)] bg-white border border-r-black-50 border-t-0">
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
