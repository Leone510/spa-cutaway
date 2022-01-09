import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { useLocalStorage } from "../../../custom/useLocalStorage";
import { CityList } from "../CityList/CityList";
import { TableForecast } from "../TableForecast/TableForecast";
import { StyledMainForecast } from "./StyledMainForecast";

export const MainForecast = memo(({width}) => {
   const { tableShow, cityList } = useSelector(store => store.forecast)
   const { setCityListLS } = useLocalStorage();

   useEffect(() => {
      
      return setCityListLS(cityList);
   }, [cityList, setCityListLS])

   return (
      <StyledMainForecast>
         <ContentWrapper width={width}>

            <CityList cityList={cityList}/>

            <TableForecast component={tableShow}/>
            
         </ContentWrapper>
      </StyledMainForecast>
   )
})