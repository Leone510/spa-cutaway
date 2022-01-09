import { Flex } from "../../../components/Flex/Flex";
import { StyledPolaroid } from "./StyledPolaroid";

export const Polaroid = ({photo, name, surname}) => {
   return (
      <StyledPolaroid className="polaroid">
         <div className="polaroidBox">
            <img src="img/pngable_polaroid.png" alt="polaroid" />
            <div className="photoBox">
               <img className="photo" src={photo} alt="avatar" />
            </div>
            <div className="nameBox">
               <Flex>
                  <h2>{`${surname} ${name}` || "Name"}</h2>
               </Flex>
            </div>
         </div>
      </StyledPolaroid>
   )
}