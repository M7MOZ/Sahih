import axios from "./axios";
import API_KEY from "../constants/API_KEY.JS";
import getRandomNumber from "../utilities/getRandomNumber";

export function getHadith(book) {
  try{
    return axios.get(
      `hadiths?apiKey=${API_KEY}&status=Sahih&hadithNumber=${getRandomNumber()}&paginate=1&book=${book}`
    );
  }
  catch(error){
    throw new Error(error);
  }
}
