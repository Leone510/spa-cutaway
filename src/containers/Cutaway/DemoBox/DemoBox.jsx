import { ContentContainer } from "../../../components/ContentContainer/ContentContainer";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { DemoCard } from "../DemoCard/DemoCard";
import { DemoSlide } from "../MainCutaway/DemoSlide/DemoSlide";

export const DemoBox = ({settings, works}) => {

   return (
      <div>
         {works.map(item => {
            return (
               <ContentContainer bottom background={item.background} bgFit="cover" key={item.img}>
                  <ContentWrapper {...settings}>
                     <DemoSlide>
                        <DemoCard {...item}/>
                     </DemoSlide>
                  </ContentWrapper>
               </ContentContainer>
            )
         })}
      </div>
   )
}