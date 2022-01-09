import { useSelector } from "react-redux"
import { StyledBurger } from "./StyledBurger"

export const Burger = (props) => {
   const { menuActive } = useSelector(store => store.cutaway);

   return (
      <StyledBurger active={menuActive} {...props}>
         <span></span>
      </StyledBurger>
   )
}