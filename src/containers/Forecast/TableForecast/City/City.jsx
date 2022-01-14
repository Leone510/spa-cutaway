import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { getCurrentWeather, getTempForecast } from "../../../../api";
import { Flex } from "../../../../components/Flex/Flex";
import { StyledImage } from "../../../../components/StyledImage/StyledImage";
import { useSetCard } from "../../../../custom/useSetCard";
import { StyledInnerTable } from "../StyledInnerTable";
import { Button } from "../../../../components/Button/Button";
import { CloseBtn } from "./CloseBtn/CloseBtn";
import { useDispatch } from "react-redux";
import { forecastActions } from "../../../../store/forecast/actionTypes";
import { WindDirection } from "./WindDirection/WindDirection";
import { Flag } from "./Flag/Flag";
import { HourlyTemp } from "./HourlyTemp/HourlyTemp";
import { StyledIconWrapper } from "./IconWrapper/StyledIconWrapper";
import { StyledCity } from "./StyledCity";

export const City = () => {
   const { cityOnTable } = useSelector(store => store.forecast);
   const [cityData, setCityData] = useState(null);
   const [hourlyTemp, setHourlyTemp] = useState(null);
   const [refresh, setRefresh] = useState(true);
   const dispatch = useDispatch();
   const {
      name, 
      weather, 
      temp, 
      icon, 
      timeZone, 
      country, 
      coord, 
      pressure,
      humidity,
      wind,
      visibility,
      sunrise,
      sunset,
   } = useSetCard(cityData);

   useEffect(() => {
      const getWeather = async () => {
         return await getCurrentWeather(cityOnTable.name);
      } 
      const weather = getWeather();
      weather.then(value => setCityData(value));
   }, [cityOnTable]);

   useEffect(() => {
      const getHourly = async () => {
         return await getTempForecast(cityOnTable.coord);
      } 
      
      const hourly = getHourly();

      hourly.then(value => setHourlyTemp(value));
   }, [cityOnTable]);

   return (
      <StyledCity>
         {cityData ? 
            <StyledInnerTable>
               <Flex justify="space-between" padding="0 0 0 20px" flex="0 0 50px">
                  <h2 style={{fontSize: "30px"}}><b>{name}</b></h2>
                  <CloseBtn onClick={() => dispatch(forecastActions.setTableShow("plug"))}/>
               </Flex>

               <Flex flex="1 1 100%">
                  <Flex direction="column" justify="center" align="flex-start" padding="20px">
                     <h3>
                        <b>{`Country: ${country} `}</b>
                        <Flag country={country}/>
                     </h3>
                     <h3><b>{`Coordinate: lat - ${coord.lat}, lon - ${coord.lon}`}</b></h3>
                     <h3><b>{`Time zone: ${timeZone}`}</b></h3>
                     <h3><b>{`Weather: ${weather}`}</b></h3>
                     <h3><b>{`Temperature: ${temp.current} °C`}</b></h3>
                     <h3><b>{`Temperature feels like: ${temp.feels} °C`}</b></h3>
                     <h3><b>{`Pressure: ${pressure}`}</b></h3>
                     <h3><b>{`Humidity: ${humidity}`}</b></h3>
                     <h3><b>{`Visibility: ${visibility}`}</b></h3>
                     <h3><b>{`Wind: ${wind.speed} m/s, direction: `}</b> <WindDirection degrees={wind.deg}/></h3>
                     <h3><b>{`Sunrise at: ${sunrise}`}</b></h3>
                     <h3><b>{`Sunset at: ${sunset}`}</b></h3>
                  </Flex>

                  <StyledIconWrapper flex="0 0 300px" direction="column" justify="flex-start">
                     {icon("300px", "300px")}
                  </StyledIconWrapper>
               </Flex>

               <HourlyTemp hourlyTemp={hourlyTemp}/>

               <Flex justify="space-around" flex="0 0 150px">

                  <Button 
                     onClick={() => setRefresh(!refresh)} 
                     color="#DAD871"
                     flex={"0 1 150px"}
                     margin={"0 10px"}
                  >
                     <b>Refresh</b>
                  </Button>

                  <Button 
                     onClick={() => dispatch(forecastActions.deleteCity(name))} 
                     color="#B03F35"
                     flex={"0 1 150px"}
                     margin={"0 10px"}
                  >
                     <b>Delete</b>
                  </Button>

               </Flex>

            </StyledInnerTable>
         :
         <StyledImage width="auto" height="auto" src="https://raw.githubusercontent.com/Leone510/cutaway/gh-pages/img/tablePlug.gif"/>
         }
      </StyledCity>
   )
}