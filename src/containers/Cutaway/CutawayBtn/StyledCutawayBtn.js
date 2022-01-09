import styled, {keyframes} from 'styled-components';
import { StyledButton } from '../../../components/Button/StyledButton';

const radiusAnimation = keyframes`
   0% {
      background-position: 0 0;
      color: black;
   }
   50% {
      background-position: 100% 0;
      color: white;
   }
   100% {
      background-position: 0 0;
      color: black;
   }
`

export const StyledCutawayBtn = styled(StyledButton)`
   /* opacity: ${({opacity}) => opacity || "1"};
   position: ${({position}) => position || "static"}; */
   background: linear-gradient(
      90deg, rgba(120,86,25,1) 0%, 
      rgba(213,146,26,1) 20%, 
      rgba(120,86,25,1) 50%, 
      rgba(26,25,24,1) 80%, 
      rgba(120,86,25,1) 100%
   );
   
   background-size: 300% 100%;
   font-weight: 700;
   letter-spacing: 1px;
   transition: 0.8s;

   &:hover {
      animation: ${radiusAnimation} 10s infinite ease-in-out;
      box-shadow: 8px 8px 15px -1px #d5921a;
      transform: translate(-2px, -2px);
   }
`