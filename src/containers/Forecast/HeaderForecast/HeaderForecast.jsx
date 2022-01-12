import { StyledHeaderForecast } from "./StyledHeaderForecast";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { Flex } from "../../../components/Flex/Flex";
import { Title } from "../../../components/Title/Title";
import { BackBtn } from "./BackBtn/BackBtn";

export const HeaderForecast = ({width}) => {

   return (
      <StyledHeaderForecast>
         <Flex>
            <ContentWrapper width={width}>
               <Flex 
                  width="200px" 
                  justify="space-between"
                  background="radial-gradient(rgba(87,42,159,1) 20%, rgba(106,90,205,1) 75%)"
               >

                  <div className="logo">
                     <div className="logoImg">
                        <img src='https://raw.githubusercontent.com/Leone510/cutaway/gh-pages/img/Weather-icon.png' alt="Weather-icon" />
                     </div>
                     <Title>
                        <span><b>Weather<br/>forecast</b></span>
                     </Title>
                  </div>
                  
               </Flex>

               <Flex justify="flex-end">
                     <span><b>Exit </b></span> <BackBtn/>
               </Flex>

            </ContentWrapper>
         </Flex>
      </StyledHeaderForecast>
   )
}