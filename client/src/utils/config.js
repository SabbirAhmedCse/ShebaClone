const config ={}

config.key = JSON.parse(localStorage.getItem('authDetails'));
config.apiUrl = "https://localhost:7194/api";

export default config;