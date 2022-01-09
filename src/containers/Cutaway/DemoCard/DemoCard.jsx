import { useHistory } from "react-router";
import { CutawayBtn } from "../CutawayBtn/CutawayBtn";
import { StyledDemoCard } from "./StyledDemoCard";

export const DemoCard = ({img, page}) => {
   const history = useHistory();

   return (
     <StyledDemoCard img={img}>
         <CutawayBtn onClick={() => history.push(page)
         }>
            <p>Go to work...</p>
         </CutawayBtn>
     </StyledDemoCard>
   )
}