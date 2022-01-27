import { Greetings } from '../Greetings/Greetings';
import { Slider } from '../Slider/Slider';
import { DemoBox } from '../../Cutaway/DemoBox/DemoBox';
import { ContentContainer } from '../../../components/ContentContainer/ContentContainer';
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper';

export const MainCutaway = (props) => {

   return (
      <main>

         <ContentContainer bottom unnecessary="100px" background='url("https://raw.githubusercontent.com/Leone510/spa-cutaway/gh-pages/img/woodenWall.jpg");'>
            <ContentWrapper width={props.settings.width}>
               <Greetings {...props}/>
            </ContentWrapper>
         </ContentContainer>

         <ContentContainer bottom bgFit="cover" background="url(https://photoshop-kopona.com/uploads/posts/2018-02/1518872743_colorful-background-2.jpg)">
            <ContentWrapper width={props.settings.width} padding="10px">
               <Slider {...props}/>
            </ContentWrapper>
         </ContentContainer>

         <DemoBox {...props}/>

      </main>
   )
}