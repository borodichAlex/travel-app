import { combineReducers } from "redux";
import { countriesReducer, placesReducer } from './reducers';

export const rootReducer = combineReducers({
    countries: countriesReducer,
    places: placesReducer,
})

export type RootState = ReturnType<typeof rootReducer>;