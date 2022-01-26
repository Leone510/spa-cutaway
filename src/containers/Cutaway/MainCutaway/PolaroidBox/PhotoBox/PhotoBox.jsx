import { StyledPhotoBox } from "./StyledPhotoBox"

export const PhotoBox = ({children}) => {

   return (
      <StyledPhotoBox>
         {children}
      </StyledPhotoBox>
   )
}