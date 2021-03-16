import { ICountry, ILangs, IPlaces } from "../../interfaces";
import { SET_COUNTRIES, SET_LANG, SET_PLACES } from "./actionTypes";

export const setLang = (payload: ILangs) => ({
    type: SET_LANG,
    payload
})

export const setCountries = (payload: Array<ICountry>) => ({
    type: SET_COUNTRIES,
    payload
})

export const setPlaces = (payload: Array<IPlaces>) => ({
    type: SET_PLACES,
    payload
})