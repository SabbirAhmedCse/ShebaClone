import CreateService from '../Pages/CreateService'
import UpdateService from '../Pages/UpdateService'
import ServiceDetails from '../Pages/ServiceDetails'
import ServicesList from '../Pages/ServicesList'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default function ServiceRoutes() {
  return(
    <Router>
      <Routes>
        <Route exact path='/CreateService' element={<CreateService />}></Route>
        <Route exact path='/UpdateService' element={<UpdateService />}></Route>
        <Route exact path='/ServiceDetails' element={<ServiceDetails />}></Route>
        <Route exact path='/Services' element={<ServicesList />}></Route>
      </Routes>
    </Router> 
  )
}