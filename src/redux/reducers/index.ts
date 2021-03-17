import { combineReducers } from "redux";
import { countriesReducer, langReducer, placesReducer } from './reducers';

export const rootReducer = combineReducers({
    countries: countriesReducer,
    lang: langReducer,
    places: placesReducer,
})

export type RootState = ReturnType<typeof rootReducer>;