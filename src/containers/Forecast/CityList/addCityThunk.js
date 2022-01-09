import { getCurrentWeather } from "../../../api"
import { forecastActions } from "../../../store/forecast/actionTypes";

export const addCityThunk = (city) => {

   return async dispatch => {
      try {
         console.log(city);
         
         const cityToAdd = await getCurrentWeather(city);
         dispatch(forecastActions.addCity(cityToAdd.name));
      } catch (error) {

      }
   }
}