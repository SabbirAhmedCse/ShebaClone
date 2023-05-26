const config ={}

config.key = JSON.parse(localStorage.getItem("tokenDetails")) ;
config.apiUrl = "https://localhost:7194/api";

export default config;