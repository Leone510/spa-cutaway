import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cutawayReducer } from "./cutaway/cutawayReducer";
import { forecastReducer } from "./forecast/forecastReducer";

const rootReducer = combineReducers({
   cutaway: cutawayReducer,
   forecast: forecastReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));