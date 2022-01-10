import { useSetCard } from "../../../custom/useSetCard";
import { StyledCityCard } from "./StyledCityCard";
import { StyledCardTitle } from "./CardTitle/StyledCardTitle";
import { Flex } from "../../../components/Flex/Flex";
import { useEffect, useState } from "react";
import { StyledImage } from "../../../components/StyledImage/StyledImage";
import { getCurrentWeather } from "../../../api";
import { useDispatch } from "react-redux";
import { forecastActions } from "../../../store/forecast/actionTypes";

export const CityCard = ({cityName, cityCoord}) => {
   const dispatch = useDispatch();
   const [cardData, setCardData] = useState(null);
   const {name, temp, icon, timeZone, country, coord} = useSetCard(cardData);

   useEffect(() => {
      const getWeather = async () => {
         return await getCurrentWeather(cityName);
      } 
      const weather = getWeather();
      weather.then(value => setCardData(value));
   }, [cityName]);

   return (

      <StyledCityCard onClick={() => dispatch(forecastActions.chooseCity({
         name: cityName, 
         coord: cityCoord,
      }))}>

         <StyledCardTitle>
            {cardData ? 
               <>
                  <span>
                     <b>{name}</b>
                  </span> 

                  <Flex justify={"space-around"} flex={"0 0 80px"}>
                     <span><b>{temp.current}</b></span>
                     {icon()}
                  </Flex>
               </> 
            :
               <StyledImage height="35px" fit="contain" src="https://raw.githubusercontent.com/Leone510/cutaway/gh-pages/img/loading.gif"/> 
            }
         </StyledCardTitle>
         
         <Flex padding={"0px 3px"}>
            {cardData ? 
               <>
                  <div>
                     <h4>{`Country: ${country}`}</h4>
                     <h4>{`Time zone: ${timeZone}`}</h4>
                     <h4>{`Longitude: ${coord.lon}`}</h4>
                     <h4>{`Latitude: ${coord.lat}`}</h4>
                  </div>
                  {icon("100px", "100px")}
               </> 
            :
               <StyledImage height="35px" fit="contain" src="https://raw.githubusercontent.com/Leone510/cutaway/gh-pages/img/loading.gif"/> 
            }
         </Flex>

      </StyledCityCard>
   )
}