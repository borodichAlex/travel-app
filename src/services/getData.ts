import { ILangs } from "../interfaces"
import { BASE_URL } from "./constants"

export const getData = (lang: ILangs, endpoint: 'countries' | 'places') => {
  return fetch(`${BASE_URL}/${endpoint}?lang=${lang}`)
    .then((data) => data.json())
}