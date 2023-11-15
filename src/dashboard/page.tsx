import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Products from "./products/page";
import Users from "./users/page";
import { childType } from "../utils/types/Types";
import styles from "./dashboard.module.css";
import Card from "../ui/dashboard/card/card";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

const DashBoard: React.FC<childType> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
          </div>
          <Transactions />
          <Chart />
        </div>
      </div>
    </Layout>
  );
};

export default DashBoard;
