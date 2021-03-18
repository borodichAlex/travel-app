import { ILangs } from "../interfaces"
import { LOCALHOST_BASE_URL } from "./constants"

export const getData = (lang: ILangs, endpoint: 'countries' | 'places') => {
  return fetch(`${LOCALHOST_BASE_URL}/${endpoint}?lang=${lang}`)
    .then((data) => data.json())
}