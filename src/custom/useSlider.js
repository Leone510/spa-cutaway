export const useSlider = (length, setIsShow) => {

   const changeSlide = (direction) => {

      if (direction < 0) {
         setIsShow(length-1);
      } else if (direction === length) {
         setIsShow(0);
      } else setIsShow(direction);
    }

   return {
      changeSlide,
   }
}