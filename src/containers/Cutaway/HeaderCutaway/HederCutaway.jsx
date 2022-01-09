import { useDispatch } from 'react-redux';
import { cutawayActions } from '../../../store/cutaway/actionTypes';
import { Burger } from '../../../components/Burger/Burger';
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper';
import { Flex } from '../../../components/Flex/Flex';
import { Navigation } from '../../Cutaway/Navigation/Navigation';
import { StyledHeaderCutaway } from './StyledHeaderCutaway';
import { Title } from '../../../components/Title/Title';

export const HeaderCutaway = (props) => {
   const dispatch = useDispatch();

   const handleBurgerClick = () => {
      dispatch(cutawayActions.toggleMenu())
   }

   return (
      <StyledHeaderCutaway>
         <ContentWrapper width={props.settings.width}>
            <Flex justify="space-between">
               <div className="logo">

                  <div className="logoImg">
                     <img src="/img/avatar.jpg" alt="avatar" />
                  </div>

                  <Title color={"#5b5643"}>
                     <h2>{`${props.person.surname} `}<br/>{props.person.name}</h2>
                  </Title>
                  
               </div>

               <nav>
                  <Navigation works={props.works}/>
                  <div onClick={handleBurgerClick}>
                     <Burger color="#f9f4e6"/>
                  </div>
               </nav>
            </Flex>
         </ContentWrapper>
      </StyledHeaderCutaway>
   )
}

