import "./App.css";
import CreateService from './Pages/CreateService'
import UpdateService from './Pages/UpdateService'
import ServiceDetails from './Pages/ServiceDetails'
import ServicesList from './Pages/ServicesList'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import CommonTable from "./Components/Table";
import ServiceRoutes from "./Routes/ServiceRoutes";

function App() {
  return (
     <ServiceRoutes/>
  );
}

export default App;
