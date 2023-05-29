import { Routes, Route } from 'react-router-dom'
import config from './utils/config';
import SignUp from './Pages/SignUp';
import SignIn from './pages/SignIn';
import DashBoard from './Pages/admin/dashboard'
import { useEffect, useState } from 'react';
import ServiceRequestList from './Pages/admin/serviceRequestList/ServiceRequestList';
import PrivateOutlet from './Pages/PrivateOutlet';

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
