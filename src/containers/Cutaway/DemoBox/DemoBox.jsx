import { ContentContainer } from "../../../components/ContentContainer/ContentContainer";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { DemoCard } from "../DemoCard/DemoCard";

export const DemoBox = ({settings, works}) => {

   return (
      <div className="demoContainer">
         {works.map(item => {
            return (
               <ContentContainer bottom background={item.background} bgFit="cover" key={item.img}>
                  <ContentWrapper {...settings}>
                     <div className="demoBox">
                        <DemoCard {...item}/>
                     </div>
                  </ContentWrapper>
               </ContentContainer>
            )
         })}
      </div>
   )
}