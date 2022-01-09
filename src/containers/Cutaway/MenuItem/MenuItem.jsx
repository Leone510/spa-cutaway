import { useScroller } from '../../../custom/useScroller';
import { StyledMenuItem } from './StiledMenuItem';

export const MenuItem = ({children, index}) => {
   const {scrollToWork} = useScroller();

   return (
      <StyledMenuItem onClick={() => scrollToWork(index)}>
         <h4>{children}</h4>
      </StyledMenuItem>
   )
}
