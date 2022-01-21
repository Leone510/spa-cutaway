import { Flex } from "../../../components/Flex/Flex";
import { StyledPolaroid } from "./StyledPolaroid";

export const Polaroid = ({photo, name, surname}) => {
   return (
      <StyledPolaroid >
         <div className="polaroidBox">
            <img 
               src="https://raw.githubusercontent.com/Leone510/cutaway/gh-pages/img/pngable_polaroid.png" 
               alt="polaroid" 
            />
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