import axios from "axios";

// api key
//  a067d779abfe0cd4761f9b137f7072d8

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = 'a067d779abfe0cd4761f9b137f7072d8';
export const ApiApp = async (query) => {
      const { data } = await axios.get(URL, {
            params: {
                  q: query,
                  units: 'metric',
                  APPID: API_Key,
            }
      })
      return data;
}