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
  const [auth, setAuth] =useState(false);
  const key = () => {
    if (config.key != null) {
      setUser(config.key.type);
      setAuth(true);
    }
  }
  useEffect(() => {
    key();
  }, []);
  console.log(config.key.token)
  return (
    <div>
      <Routes>
        { user == 'admin' &&
          <Route path='/*' element={<PrivateOutlet auth={auth} />}>
          <Route path='dashboard' element={<DashBoard />}></Route>
          <Route path="requestedservices" element={<ServiceRequestList/>}></Route>
        </Route>
        }
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
