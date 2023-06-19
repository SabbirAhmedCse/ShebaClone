const key = JSON.parse(localStorage.getItem("authDetails"));
//const baseUrl = "http://192.168.0.115/api";
const baseUrl="http://localhost:7194/api/";
const config = {
  key,
  baseUrl,
};
export default config;
