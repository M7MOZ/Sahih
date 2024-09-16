import axios from "axios";
const BASE_URL = "https://api.unsplash.com/photos/";
const UNSPLASH_ACCESS_KEY = "OP4G161kBAHT-zXlSkYYwdIXUWr4mjhyTbrmnQYItO8"; // Replace with your Unsplash API key
export const getPhoto = () => {
  return axios.get(
    `${BASE_URL}random?query=nature&client_id=${UNSPLASH_ACCESS_KEY}`
  );
};
