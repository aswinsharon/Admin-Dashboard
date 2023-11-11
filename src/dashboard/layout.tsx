import SideBar from "../ui/dashboard/sidebar/sidebar";
import NavBar from "../ui/dashboard/navbar/navbar";
import React from "react";
import styles from "./dashboard.module.css";
import { childType } from "../../types/Types";

const Layout: React.FC<childType> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
