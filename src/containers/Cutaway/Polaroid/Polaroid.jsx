import { Flex } from "../../../components/Flex/Flex";
import { PolaroidBox } from "../MainCutaway/PolaroidBox/PolaroidBox";
import { StyledPolaroid } from "./StyledPolaroid";
import { StyledImage } from "../../../components/StyledImage/StyledImage";
import { PhotoBox } from "../MainCutaway/PolaroidBox/PhotoBox/PhotoBox";
import { NameBox } from "../MainCutaway/PolaroidBox/NameBox/NameBox";

export const Polaroid = ({photo, name, surname}) => {
   return (
      <StyledPolaroid >
         <PolaroidBox>
            <StyledImage
               src="https://raw.githubusercontent.com/Leone510/cutaway/gh-pages/img/pngable_polaroid.png" 
               alt="polaroid" 
            />

            <PhotoBox>
               <StyledImage width={"100%"} height={"100%"} src={photo} alt="avatar" />
            </PhotoBox>

            <NameBox>
               <Flex>
                  <h2>{`${surname} ${name}` || "Name"}</h2>
               </Flex>
            </NameBox>
         </PolaroidBox>
      </StyledPolaroid>
   )
}