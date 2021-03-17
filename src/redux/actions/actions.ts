import { ICountry, IPlaces } from "../../interfaces";
import { SET_COUNTRIES, SET_PLACES } from "./actionTypes";

export const setCountries = (payload: Array<ICountry>) => ({
    type: SET_COUNTRIES,
    payload
})

export const setPlaces = (payload: Array<IPlaces>) => ({
    type: SET_PLACES,
    payload
})