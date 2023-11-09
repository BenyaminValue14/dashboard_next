import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

type IProps = {
  children: React.ReactNode;
}
const LayoutDashboard = ({ children }: IProps) => {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Navbar/>
        {children}
      </div>
    </div>
  )
};

export default LayoutDashboard;
