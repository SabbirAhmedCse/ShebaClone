const config ={}

config.key = `Bearer ${JSON.parse(localStorage.getItem('authDetails')).token} `;
config.apiUrl = "https://localhost:7194/api";

export default config;