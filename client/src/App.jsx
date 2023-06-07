import { Routes, Route } from 'react-router-dom'
import config from './utils/config';
import SignUp from './Pages/SignUp';
import SignIn from './pages/SignIn';
import DashBoard from './Pages/admin/dashboard'
import { useEffect, useState } from 'react';
import ServiceRequestList from './Pages/admin/serviceRequestList/ServiceRequestList';

import PrivateOutlet from './Pages/PrivateOutlet';
import Details from './components/serviceRequest/Details';
import RejectReson from './components/serviceRequest/RejectReson';
//mechanic List
import MechanicListWithSearch from "./Pages/MechanicListWithSearch";
import MechanicDetails from './Pages/MechanicDetails';
//Service List{Problem not solved}
import ServicesList from './Pages/ServicesList';
import CreateService from './Pages/CreateService';
import ServiceDetails from './Pages/ServiceDetails';
import UpdateService from './Pages/UpdateService';


//Customer List 
import CustomerList from './Pages/CustomerList';
import CustomerDetails from './Pages/CustomerDetails';





function App() {
  const [user, setUser] = useState('');
  const [auth, setAuth] =useState(false);
  const key = () => {
    console.log(config.key)
    if (config.key != null) {
      setUser(config.key.type);
      setAuth(true);
    }
    else {
      setUser(null);
      setAuth(false);
    }
  }

  
  useEffect(() => {
    key();
  }, []);
  return (
    <div>
      <Routes>
        {user == null && <Route path='/*' element={<PrivateOutlet auth={auth} />}/> }
        { user.toLowerCase() == 'admin' &&(
          <Route path='/*' element={<PrivateOutlet auth={auth} />}>
          <Route path='dashboard' element={<DashBoard />}></Route>
          <Route  path='Mechanics' element={<MechanicListWithSearch/>}></Route>
          <Route  path='MechanicDetails' element={<MechanicDetails/>}></Route>
          <Route path='Customers'element={<CustomerList/>}></Route>
          <Route path='CustomerDetails'element={<CustomerDetails/>}></Route>
          <Route  path='Services' element={<ServicesList/>}></Route>
          <Route path='CreateService' element={<CreateService/>}></Route>
          <Route  path='ServiceDetails' element={<ServiceDetails/>}></Route>
          <Route path='UpdateService' element ={<UpdateService/>}></Route>
          <Route path='requestedservices' element={<ServiceRequestList/>}></Route>
          <Route path='requestedservices' element={<ServiceRequestList/>}></Route>
          <Route path='addmechanic/:id' element={<Details/>}></Route>
          <Route path='reject/:id' element={<RejectReson/>}></Route>
        </Route>
        )}
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
         
      </Routes>
    </div>
  );
      }

export default App;