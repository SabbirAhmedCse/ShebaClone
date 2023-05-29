import React, { useState, useEffect } from "react";
import {Route} from 'react-router-dom'
import Details from "../../../components/serviceRequest/Details";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Details></Details>
    </div>
  );
};

export default Dashboard;
