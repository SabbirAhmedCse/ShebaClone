
import './App.css';
//import DashBoard from './Pages/DashBoard';
//import MechanicsList from './Pages/MechanicList';
//import Layout from './Layout/layout';
//import MyNavbar from './Pages/MyNavBar';
import Router from './Routes/Route'







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
