import SignIn from "./pages/SignIn";
import "./App.css";
import ServiceRoutes from "./Routes/ServiceRoutes";

function App() {
  return (
    <div>
      <ServiceRoutes/>
      <SignIn />
    </div>
  );
}

export default App;
