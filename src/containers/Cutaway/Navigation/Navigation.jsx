import { useSelector } from "react-redux"
import { useScroller } from "../../../custom/useScroller"
import { MenuItem } from "../MenuItem/MenuItem"
import { StyledNavigation } from "./StyledNavigation"

export const Navigation = ({works}) => {
   const { scrollToWork } = useScroller();
   const { menuActive } = useSelector(store => store.cutaway);

   return (
      <StyledNavigation active={menuActive}>
         {works.map((work, index) => {
            return (
               <MenuItem onClick={()=>scrollToWork(index)} key={work.name} index={index}>
                  {work.name}
               </MenuItem>
            )
         })}
      </StyledNavigation>
   )
}