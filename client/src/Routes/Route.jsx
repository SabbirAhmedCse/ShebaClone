//import Layout from "../Layout/layout";
import DashBoard from "../Pages/DashBoard";
import MechanicDetails from "../Pages/MechanicDetails";
//import MechanicsList from "../Pages/MechanicList";
import MechanicListWithSearch from "../Pages/MechanicListWithSearch";
import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ServicesList from "../Pages/ServicesList";
import ServiceDetails from "../Pages/ServiceDetails";
import CreateService from "../Pages/CreateService";
import UpdateService from "../Pages/UpdateService";
import CustomerList from "../Pages/CustomerList";
import CustomerDetails from "../Pages/CustomerDetails";



export default function MechanicRoutes(){
    return(
   
        <Routes>
          <Route exact path='/' element={<DashBoard/>}></Route>
          <Route exact path='/MechanicListWithSearch' element={<MechanicListWithSearch/>}></Route>
          <Route exact path='/MechanicDetails' element={<MechanicDetails />}></Route>
          <Route exact path='/CreateService' element={<CreateService />}></Route>
          <Route exact path='/UpdateService' element={<UpdateService />}></Route>
          <Route Route exact path='/ServiceDetails' element={<ServiceDetails />}></Route>
          <Route exact path='/Services' element={<ServicesList />}></Route>
           <Route path="/customerList" element={<CustomerList/>}/> 
         <Route path="/customerDetails" element={<CustomerDetails/>}/>



      
          
       </Routes>
    
    );
}