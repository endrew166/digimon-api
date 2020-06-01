import axios from "axios";

const api = axios.create({
  baseURL: "https://digimon-api.herokuapp.com/api/digimon/",
});
export default api;
