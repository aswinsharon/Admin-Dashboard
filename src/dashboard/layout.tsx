import SideBar from "../ui/dashboard/sidebar/sidebar";
import NavBar from "../ui/dashboard/navbar/navbar";
import React from "react";
interface LayoutType {
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
