const key = JSON.parse(localStorage.getItem("authDetails"));
const baseUrl = "http://192.168.0.40/api";
const config = {
  key,
  baseUrl,
};
export default config;
