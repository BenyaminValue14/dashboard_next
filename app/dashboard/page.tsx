import React from "react";
import styles from "../ui/dashboard/dashboard.module.css";
import Card from "../ui/dashboard/card/Card";
import Transactions from "../ui/dashboard/transactions/Transactions";
import Chart from "../ui/dashboard/chart/Chart";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";

const DashboardPage = () => {
  return (
  <div className={styles.wrapper}>
    <div className={styles.main}>
      <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Transactions/>
      <div>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
    </div>
  </div>
  );
};

export default DashboardPage;
