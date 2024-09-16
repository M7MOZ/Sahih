import BASE_URL from "../constants/BASE-URL.JS";
import axios from "axios";
export default axios.create({
  baseURL: BASE_URL,
});
