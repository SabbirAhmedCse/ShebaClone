import config from "../utils/config";
import commonDataAccess  from "./commonDataAccess";


const signin =  (signinData) => {
  console.log(signinData);
  const authData =  commonDataAccess.post(`${config.baseUrl}/User/signin`, signinData);
   console.log(JSON.stringify(authData))
  if (authData !=null) {
    localStorage.setItem('authDetails', JSON.stringify(authData));
    console.log(JSON.parse(localStorage.getItem('authDetails')).token)
    return true
  }
  else{
    localStorage.removeItem("authDetails");
    return false;
  }
};
const signout = () => {
  localStorage.removeItem("authDetails");
  return {};
};


const getCurrentUser = () => {
    let authData = localStorage.getItem("authDetails");
    let token = JSON.stringify(authData.token);
    console.log(token)
   if(token==null){
    return null
   }
    else{
      let user = authData.Type;
      return user;
    }
};

const AuthAccess = {
  signin,
  signout,
  getCurrentUser,
};
export default AuthAccess;
