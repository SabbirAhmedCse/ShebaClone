import axios from "axios";
import config from "../utils/config";


const signin = async (signinData) => {
  console.log(signinData);
  const authData = (await axios.post(`${config.baseUrl}/User/signin`, signinData)).data;
   console.log(JSON.stringify(authData))
  if (authData.token!=null) {
    console.log(JSON.stringify(authData))
    localStorage.setItem('authDetails', JSON.stringify(authData));
    console.log(JSON.parse(localStorage.getItem('authDetails')).token)
  }
  else{
    localStorage.removeItem("authDetails");
    return {};
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
