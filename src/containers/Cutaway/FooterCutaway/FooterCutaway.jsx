import React from 'react';
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper';

export const FooterCutaway = ({width}) => {
   return (
      <footer>

         <ContentWrapper width={width}>
            <h2  style={{color: 'white'}}>Footer</h2>
         </ContentWrapper>
         
      </footer>
   )
}