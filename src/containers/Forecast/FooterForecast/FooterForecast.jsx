import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper"
import { StyledFooterForecast } from "./StyledFooterForecast"

export const FooterForecast = ({width}) => {

   return (
      <StyledFooterForecast>
         <ContentWrapper width={width}>
            Footer
         </ContentWrapper>
      </StyledFooterForecast>
   )
}