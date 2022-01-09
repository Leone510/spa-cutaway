import styled from 'styled-components';

export const StyledWindDirection = styled.div`
   display: inline-block;
   transform: rotate(${props => props.degrees}deg) translateY(3px);
`