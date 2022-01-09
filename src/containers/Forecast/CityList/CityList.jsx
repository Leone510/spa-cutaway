import { useState } from "react";
import { Flex } from "../../../components/Flex/Flex";
import { CityCard } from "../CityCard/CityCard";
import { AddBtn } from "./AddBtn/AddBtn";
import { RefreshBtn } from "./RefreshBtn/RefreshBtn";
// import { SortBtn } from "./SortBtn/SortBtn";
import { StyledCityList } from "./StyledCityList";

export const CityList = ({cityList}) => {
   const [refresh, setRefresh] = useState(true);
   // const [sortedList, setSortedList] = useState([...cityList.sort()]);

   // const handleSort = () => {
   //    setSortedList([...sortedList.reverse()]);
   // }
       
   return (
      <StyledCityList>

         <Flex background="linear-gradient(0deg, rgba(93,118,203,0.5) 0%, rgba(93,118,203,1) 100%)" 
            flex="0 0 50px"
         >
            <h2><b>City list</b></h2>
         </Flex>

         <Flex flex="0 0 50px">
            {/* <SortBtn onClick={() => handleSort()} flex="1 1 auto"/> */}
            <AddBtn flex="1 1 auto"/>
            <RefreshBtn onClick={() => setRefresh(!refresh)} flex="1 1 auto"/>
         </Flex>

         <Flex flex="1 1 100%" justify={"flex-start"} direction={"column"} padding={"10px"}>
            {cityList.map(city => {
               
               return (
                  <CityCard cityCoord={city.coord} cityName={city.name} key={city.name}>
                     <h3>{city.name}</h3>
                  </CityCard>
               )
            })}
         </Flex>
         
      </StyledCityList>
   )
}