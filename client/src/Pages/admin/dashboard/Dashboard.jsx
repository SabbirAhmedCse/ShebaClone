import React, { useState, useEffect } from "react";
import {Route} from 'react-router-dom'
import Details from "../../../components/serviceRequest/Details";
import CommonTable from "../../../components/table/CommonTable";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Details></Details>
      <CommonTable></CommonTable>
    </div>
  );
};

export default Dashboard;
