import { memo} from "react";
import { AddCity } from "./AddCity/AddCity";
import { StyledTableForecast } from "./StyledTableForecast";
import { CityAdded } from "./CityAdded/CityAdded";
import { ExistCity } from "./ExistCity/ExistCity";
import { NotFound } from "./NotFound/NotFound";
import { City } from "./City/City";

export const TableForecast = memo(({component}) => {

   const toShow = {
      plug: null,
      addCity: <AddCity/>,
      cityAdded: <CityAdded/>,
      existCity: <ExistCity/>,
      notFound: <NotFound/>,
      city: <City/>,
   }

   return (
      <StyledTableForecast hide={component}>
         {toShow[component]}
      </StyledTableForecast>
   )
})