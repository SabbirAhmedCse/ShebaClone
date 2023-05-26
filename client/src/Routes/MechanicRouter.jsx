//import Layout from "../Layout/layout";
import DashBoard from "../Pages/DashBoard";
import MechanicDetails from "../Pages/MechanicDetails";
//import MechanicsList from "../Pages/MechanicList";
import MechanicListWithSearch from "../Pages/MechanicListWithSearch";


import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';



export default function MechanicRoutes(){
    return(
    <Router>
        <Routes>
          <Route exact path='/' element={<DashBoard/>}></Route>
          <Route exact path='/MechanicListWithSearch' element={<MechanicListWithSearch />}></Route>
          <Route exact path='/MechanicDetails' element={<MechanicDetails />}></Route>
      
          
       </Routes>
      </Router>
    );
}