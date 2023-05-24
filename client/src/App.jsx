import "./App.css";
import CreateService from './Pages/CreateService'
import UpdateService from './Pages/UpdateService'
import ServiceDetails from './Pages/ServiceDetails'
import ServicesList from './Pages/ServicesList'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ServicesList />}></Route>
        <Route exact path='/Create' element={<CreateService />}></Route>
        <Route exact path='/Update' element={<UpdateService />}></Route>
        <Route exact path='/Details' element={<ServiceDetails />}></Route>
        <Route exact path='/Services' element={<ServicesList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
