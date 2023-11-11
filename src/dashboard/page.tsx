import React, { ReactNode } from "react";
import Layout from "./layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./products/page";
import Users from "./users/page";
import { childType } from "../utils/types/Types";

const DashBoard: React.FC<childType> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </Layout>
  );
};

export default DashBoard;
