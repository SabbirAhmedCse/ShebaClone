import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
//import Dashboard from './Pages/Dashboard';
//import MechanicRoutes from './Routes/Route';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
      <App/>
  </BrowserRouter>
 
);


