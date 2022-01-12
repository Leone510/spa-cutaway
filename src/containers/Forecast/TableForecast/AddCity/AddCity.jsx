import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex } from "../../../../components/Flex/Flex";
import { Button } from "../../../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { forecastActions } from "../../../../store/forecast/actionTypes";
import { StyledInput } from "../../../../components/Input/StyledInput";
import { StyledForm } from "../../../../components/Form/StyledForm";
import { getCurrentWeather } from '../../../../api';
import { StyledModalMessage } from '../StyledModalMessage';

const schema = yup.object().shape({
   city: yup
            .string()
            .strict(true)
            .required('City name is required...')
})

export const AddCity = () => {
   const { cityList } = useSelector(store => store.forecast);
   const dispatch = useDispatch();
   const {register, handleSubmit, reset, formState: { errors }} = useForm({
      resolver: yupResolver(schema)
   });

   const handleCityAdd = async ({city}) => {
      reset();
      
      try {
         const cityToAdd = await getCurrentWeather(city)
         cityList.map(cityArr => cityArr["name"]).includes(cityToAdd.name) ?
            dispatch(forecastActions.setTableShow("existCity")) :
            dispatch(forecastActions.addCity({
               name: cityToAdd.name,
               coord: cityToAdd.coord,
            }));
      } catch(e) {
         (e.response.data.cod === "404") &&
         dispatch(forecastActions.setTableShow("notFound"));
      }
   }

   return (
      <StyledForm onSubmit={handleSubmit(handleCityAdd)}>

         <Flex flex={"1 1 100%"} direction="column">
            <StyledModalMessage><b>Add a new city to yours "City list"</b></StyledModalMessage>
         </Flex>

         <Flex flex={"1 1 100%"} direction="column" justify="flex-start" align="center">
            <StyledInput 
               {...register("city")} 
               width="90%" 
               placeholder="Enter city to search..."
            />
            <h4 style={{color: "red", margin: "10px 0 0 0"}}>
               {!!errors.city?.message ? errors.city?.message : " "}
            </h4>
         </Flex>

         <Flex flex={"0 0 200px"}>
            <Button type="submit" color="#00693E">
               <b>Add...</b>
            </Button>

            <Button
               type="botton" 
               onClick={() => dispatch(forecastActions.setTableShow("plug"))} 
               color="#B03F35"
            >
               <b>Cancel</b>
            </Button>
         </Flex>

      </StyledForm>
   )
}