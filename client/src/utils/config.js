const key = JSON.parse(localStorage.getItem("authDetails"));
const baseUrl = "https://localhost:7194/api";
const config = {
  key,
  baseUrl,
};
export default config;
