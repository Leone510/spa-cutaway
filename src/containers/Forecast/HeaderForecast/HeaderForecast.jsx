import { StyledHeaderForecast } from "./StyledHeaderForecast";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { Flex } from "../../../components/Flex/Flex";
import { Title } from "../../../components/Title/Title";
import { BackBtn } from "./BackBtn/BackBtn";
import { Logo } from "../../../components/Logo/Logo";
import { LogoImg } from "../../../components/Logo/StyledLogoImg/LogoImg";
import { StyledImage } from "../../../components/StyledImage/StyledImage";

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

                  <Logo>
                     <LogoImg>
                        <StyledImage 
                           src='https://raw.githubusercontent.com/Leone510/spa-cutaway/gh-pages/img/Weather-icon.png' 
                           alt="Weather-icon" 
                           width={"100%"}
                           height={"100%"}
                        />
                     </LogoImg>
                     <Title>
                        <span><b>Weather<br/>forecast</b></span>
                     </Title>
                  </Logo>
                  
               </Flex>

               <Flex justify="flex-end">
                     <span><b>Exit </b></span> <BackBtn/>
               </Flex>

            </ContentWrapper>
         </Flex>
      </StyledHeaderForecast>
   )
}