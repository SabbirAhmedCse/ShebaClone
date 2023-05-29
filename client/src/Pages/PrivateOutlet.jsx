import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AdminNavBar from '../Components/navBar/AdminNAvBar';

const PrivateOutlet = () => {
    const auth = true;
    return auth? <div><AdminNavBar/><Outlet/></div> : <Navigate to="/signin"/>
}

export default PrivateOutlet