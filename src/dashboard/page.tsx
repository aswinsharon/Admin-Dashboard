import React, { ReactNode } from "react";
import Layout from "./layout";

interface DashBoardProps {
  children?: ReactNode;
}

const DashBoard: React.FC<DashBoardProps> = () => {
  return <Layout>Dashboard</Layout>;
};

export default DashBoard;
