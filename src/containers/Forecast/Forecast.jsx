import { HeaderForecast } from "./HeaderForecast/HeaderForecast";
import { StyledForecust } from "./StyledForecast";
import blank from "../../data/blank.json";
import { MainForecast } from "./MainForecast/MainForecast";
import { FooterForecast } from "./FooterForecast/FooterForecast";

export const Forecast = () => {

   return (
      <StyledForecust>
         
         <HeaderForecast {...blank.settings}/>

         <MainForecast {...blank.settings}/>

         <FooterForecast {...blank.settings}/>
         
      </StyledForecust>
   )
}