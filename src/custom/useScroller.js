import { useDispatch, useSelector } from "react-redux";
import { cutawayActions } from "../store/cutaway/actionTypes";

export const useScroller = () => {
   const { menuActive } = useSelector(store => store.cutaway);
   const dispatch = useDispatch();

   const scrollToWork = async (index) => {

      let scrollTop = ((index + 2) * window.innerHeight);
      (document.documentElement.clientWidth < 768) && (scrollTop += 50);

      //For Safari
      // window.scrollTo(0, scrollTop);

      menuActive && await dispatch(cutawayActions.closeMenu());

      window.scrollTo({
         top: scrollTop,
         left: 0,
         behavior: "smooth",
      })

   }

   const scrollTop = () => {

      //For Safari
      // window.scrollTo(0, 0);

      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth",
      })
   }

   return {
      scrollToWork,
      scrollTop,
   }
}