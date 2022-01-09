import { Polaroid } from "../Polaroid/Polaroid";
import { Sticker } from "../Sticker/Sticker";
import { StyledGreetings } from "./StyledGreetings";

export const Greetings = ({settings, person}) => {

   return (
      <StyledGreetings>
         <Polaroid {...person}/>
         <Sticker {...person}/>
      </StyledGreetings>
   )
}