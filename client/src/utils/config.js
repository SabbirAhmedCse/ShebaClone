const key = JSON.parse(localStorage.getItem("authDetails"));
const baseUrl = "http://shebaapi.xyz/api";
const config = {
  key,
  baseUrl,
};
export default config;
