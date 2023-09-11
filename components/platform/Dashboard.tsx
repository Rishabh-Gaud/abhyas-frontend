import React from "react";
import SideBarPlatform from "../Navbar/SideBarPlatform";
import DashboardDetail from "./DashboardDetail";
import DetailForm from "../DetailPage";
import CreateTest from "./createTest/CreateTest";

function Dashboard() {
  return (
    <div className="w-[100%]  mt-8 ">
      <SideBarPlatform />
      <div id="" className="border-2 rounded-lg width-[100%] flex">
        <div className="w-[22%]"></div>
        {/* <DashboardDetail data="" /> */}
        <CreateTest />
      </div>
    </div>
  );
}

export default Dashboard;
