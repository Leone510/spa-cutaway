const actionTypes = {
   SET_TABLE_SHOW: "SET_TABLE_SHOW",
   ADD_CITY: 'ADD_CITY',
   CHOOSE_CITY_TO_SHOW: 'CHOOSE_CITY_TO_SHOW',
   DELETE_CITY: 'DELETE_CITY',
}

export const forecastActions = {
   setTableShow: (payload) => ({type: actionTypes.SET_TABLE_SHOW, payload}),
   addCity: (payload) => ({type: actionTypes.ADD_CITY, payload}),
   chooseCity: (payload) => ({type: actionTypes.CHOOSE_CITY_TO_SHOW, payload}),
   deleteCity: (payload) => ({type: actionTypes.DELETE_CITY, payload}),
}