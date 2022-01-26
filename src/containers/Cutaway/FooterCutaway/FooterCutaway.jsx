import React from 'react';
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper';
import { StyledFooterCutaway } from './StyledFooterCutaway';

export const FooterCutaway = ({width}) => {
   return (
      <StyledFooterCutaway>

         <ContentWrapper width={width}>
            <h2  style={{color: 'white'}}>Footer</h2>
         </ContentWrapper>
         
      </StyledFooterCutaway>
   )
}