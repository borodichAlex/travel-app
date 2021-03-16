import { combineReducers } from "redux";
import { countriesReducer, langReducer, placesReducer } from './reducers'

export default combineReducers({
    countries: countriesReducer,
    lang: langReducer,
    places: placesReducer,
})