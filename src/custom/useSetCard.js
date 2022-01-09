// import { StyledIconImg } from "../../components/IconImg/styledIconImg";

import { StyledImage } from "../components/StyledImage/StyledImage";

export const useSetCard = (data) => {
   if (data === null) {
      return {
         name: null,
         temp: null,
         icon: null,
         weather: null,
         timeZone: null,
         coord: null,
         pressure: null,
         humidity: null,
         wind: null,
         visibility: null,
         sunrise: null,
         sunset: null,
      };
   }

   const name = data.name;

   const temp = {
      current: Math.round(data.main.temp) > 0 ?
               `+${Math.round(data.main.temp)}` :
               Math.round(data.main.temp),
      feels: Math.round(data.main.feels_like) > 0 ?
            `+${Math.round(data.main.feels_like)}` :
            Math.round(data.main.feels_like),
   };

   const icon = (width="40px", height="40px") => {
      return (
         <StyledImage 
            width={width} 
            height={height}
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
         />
      )
   }

   const weather = data.weather[0].description;

   const timeZone = data.timezone > 0 ?
         `UTC +${data.timezone / 3600}` : `UTC ${data.timezone / 3600}`;

   const country = data.sys.country;

   const coord = {
      lon: data.coord.lon,
      lat: data.coord.lat,
   }

   const pressure = `${data.main.pressure} mm Hg`;

   const humidity = `${data.main.humidity} %`;

   const visibility = `${data.visibility} m`;

   const wind = {
      speed: data.wind.speed,
      deg: data.wind.deg,
   }

   const sunrise = new Date(data.sys.sunrise*1000).toTimeString().split(' ')[0];
   const sunset = new Date(data.sys.sunset*1000).toTimeString().split(' ')[0];

   return {
      name,
      temp,
      icon,
      weather,
      timeZone,
      country,
      coord,
      pressure,
      humidity,
      wind,
      visibility,
      sunrise,
      sunset,
   }
}