import { StyledSlide } from "./StyledSlide";
import { CutawayBtn } from "../CutawayBtn/CutawayBtn";
import { Flex } from "../../../components/Flex/Flex";
import { ArrowBtn } from "./ArrowBtn/ArrowBtn";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useScroller } from "../../../custom/useScroller";
import { useSlider } from "../../../custom/useSlider";

export const Slide = ({img, index, length, setIsShow}) => {
   const {scrollToWork} = useScroller();
   const {changeSlide} = useSlider(length, setIsShow);

   return (
      <StyledSlide img={img} className="slide">
         <Flex justify="space-between">

            <ArrowBtn onClick={() => changeSlide(index-1)}>
               <FaArrowCircleLeft size="1.7em"/>
            </ArrowBtn>

            <CutawayBtn onClick={() => scrollToWork(index)}> 
               <p>Scroll to...</p>
            </CutawayBtn>

            <ArrowBtn onClick={() => changeSlide(index+1)}>
               <FaArrowCircleRight size="1.7em"/>
            </ArrowBtn>

         </Flex>
      </StyledSlide>
   )
}