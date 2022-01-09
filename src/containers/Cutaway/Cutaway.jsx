import { useSelector } from 'react-redux';
import blank from '../../data/blank.json';
import { HeaderCutaway } from './HeaderCutaway/HederCutaway';
import { MainCutaway } from './MainCutaway/MainCutaway';
import { FooterCutaway } from './FooterCutaway/FooterCutaway';
import { StyledCutaway } from './StyledCutaway';
import { UpBtn } from '../Cutaway/UpBtn/UpBtn';

export const Cutaway = () => {
   const { menuActive } = useSelector(store => store.cutaway);

   return (
      <StyledCutaway menuActive={menuActive}>

         <HeaderCutaway {...blank}/>

         <MainCutaway {...blank}/>

         <FooterCutaway {...blank.settings}/>

         <UpBtn />

      </StyledCutaway>
   )
}