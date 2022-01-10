import React from 'react';
import { StyledImage } from '../../../../../components/StyledImage/StyledImage';
// import { StyledHour } from '../Hour/styled';
import {StyledHourlyTemp} from './styled';
import { StyledHour } from './styledHour';

export const HourlyTemp = ({hourlyTemp}) => {

   const tempColor = (t) => {
      const num = t + 50;

      switch (true) {
         case num < 26 :
            return {r: "0", g: String(num*10), b: "250"};
         
         case num > 25 && num < 51 :
            return {r: "0", g: "250", b: String((num-25)*10)};
            
         case num > 50 && num < 76 :
            return {r: String((num-50)*10), g: "250", b: "0"};
         
         case num > 75 :
            return {r: "250", g: String((num-75)*10), b: "0"};

         default :
            return {r: "250", g: "250", b: "250"};
      }
   }

   const tempConfig = () => {
      const daylyTemps = hourlyTemp.hourly.slice(0, 24);
      const tempsArr = daylyTemps.map(hour => Math.round(hour.temp));
      const min = Math.min.apply(null, tempsArr);
      const max = Math.max.apply(null, tempsArr);
      const difference = !!(max - min) ? max - min : 2; // exclude "0"
      const height = Math.round(200 / (difference));
      const coordinates = tempsArr.map((hour, i) => {
         return {
            x: i * 50 + 25,
            y: Math.round(((hour - min) * difference) + height / 2),
            height: height,
            temp: hour > 0 ? `+${hour}` : `${hour}`,
            color: tempColor(hour),
         }
      })

      return coordinates;
   }

   return (
      <StyledHourlyTemp>
         <>
            {hourlyTemp ?
               tempConfig().map(data => {
                  return (
                     <StyledHour key={data.x} coord={data}>
                        {data.temp}
                     </StyledHour>
                  )
               })
               
            :
               <StyledImage height="190px" fit="contain" src="https://raw.githubusercontent.com/Leone510/cutaway/gh-pages/img/loading.gif"/>
            }
         </>
      </StyledHourlyTemp>
   )
}