import { useState } from "react";
import { Slide } from "../Slide/Slide";

export const Slider = ({works}) => {
   const [isShow, setIsShow] = useState(0);

   return (
      <Slide 
         {...works[isShow]}
         key={works[isShow].name}
         setIsShow={setIsShow}
         index={isShow} 
         length={works.length}
      />
   )
}