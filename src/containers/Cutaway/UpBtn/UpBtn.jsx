import { useState } from "react";
import { useEffect } from "react";
import { StyledUpBtn } from "./StyledUpBtn";
import { FaArrowCircleUp } from 'react-icons/fa';
import { useScroller } from "../../../custom/useScroller";

export const UpBtn = ({children}) => {
   const [hide, setHide] = useState(true);
   const {scrollTop} = useScroller();
   
   const hideBtn = () => {
      setHide(window.pageYOffset < document.documentElement.clientHeight);
   }

   useEffect(() => {
      window.addEventListener('scroll', hideBtn);
      return () => window.removeEventListener('scroll', hideBtn);
   }, []);

   return (
      <StyledUpBtn hide={hide} onClick={scrollTop}>
         <FaArrowCircleUp size="3em"/>
      </StyledUpBtn>
   )
}