import { ICountriesAction, ICountry, IPlacesAction } from "../../interfaces";
import { SET_COUNTRIES, SET_PLACES } from "../actions/actionTypes";

export const countriesReducer = (state: Array<ICountry> | [] = [], action: ICountriesAction) => {
    switch(action.type) {
        case SET_COUNTRIES: {
            return action.payload;
        }

        default: {
            return state
        }
    }
}

export const placesReducer = (state: Array<ICountry> | [] = [], action: IPlacesAction) => {
    switch(action.type) {
        case SET_PLACES: {
            return action.payload
        }

        default: {
            return state;
        }
    }
}