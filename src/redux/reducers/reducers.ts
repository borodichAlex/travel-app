import { ICountriesAction, ICountry, ILangs, ILangsAction } from "../../interfaces";
import { SET_COUNTRIES, SET_LANG, SET_PLACES } from "../actions/actionTypes";

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

export const langReducer = (state: ILangs = 'en', action: ILangsAction) => {
    switch(action.type) {
        case SET_LANG: {
            return action.payload
        }

        default: {
            return state;
        }
    }
}

export const placesReducer = (state: Array<ICountry> | [] = [], action: ICountriesAction) => {
    switch(action.type) {
        case SET_PLACES: {
            return action.payload
        }

        default: {
            return state;
        }
    }
}