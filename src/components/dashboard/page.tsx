import React from "react";
import { childType } from "../../types/Types";
import styles from "./dashboard.module.css";
import Card from "../ui/dashboard/card/card";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

const DashBoard: React.FC<childType> = () => {
  return (
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
  );
};

export default DashBoard;
