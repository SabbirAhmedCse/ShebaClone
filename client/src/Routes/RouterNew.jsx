import { Routes, Route } from 'react-router-dom'
import config from './utils/config';
import SignUp from './Pages/SignUp';
import SignIn from './pages/SignIn';
import DashBoard from './Pages/admin/dashboard'
import { useEffect, useState } from 'react';
import ServiceRequestList from './Pages/admin/serviceRequestList/ServiceRequestList';
import PrivateOutlet from './Pages/PrivateOutlet';
//import DashBoard from "../Pages/DashBoard";
import MechanicDetails from "../Pages/MechanicDetails";
//import MechanicsList from "../Pages/MechanicList";
import MechanicListWithSearch from "../Pages/MechanicListWithSearch";
import React from "react";
//import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ServicesList from "../Pages/ServicesList";
import ServiceDetails from "../Pages/ServiceDetails";
import CreateService from "../Pages/CreateService";
import UpdateService from "../Pages/UpdateService";
import CustomerList from "../Pages/CustomerList";
import CustomerDetails from "../Pages/CustomerDetails";

 export default function RouterNew() {
  const [user, setUser] = useState(null);
  const key = () => {
    if (config.key != null) {
      console.log(config.key)
      setUser(config.key.type);
    }
  }
  useEffect(() => {
    key();
  }, []);
  
  return (
    <div>
      <Routes>
        <Route path='/*' element={<PrivateOutlet auth={user} />}>
          <Route path='dashboard' element={<DashBoard />}></Route>
          <Route path="requestedservices" element={<ServiceRequestList/>}></Route>
        </Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
         <Route exact path='/MechanicListWithSearch' element={<MechanicListWithSearch />}></Route>
          <Route exact path='/MechanicDetails' element={<MechanicDetails />}></Route>
          <Route exact path='/Create' element={<CreateService />}></Route>
          <Route exact path='/Update' element={<UpdateService />}></Route>
          <Route Route exact path='/Details' element={<ServiceDetails />}></Route>
          <Route exact path='/Services' element={<ServicesList />}></Route>
           <Route path="/customerList" element={<CustomerList/>}/> 
         <Route path="/customerDetails" element={<CustomerDetails/>}/>
      </Routes>
    </div>
  );
}
