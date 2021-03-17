interface ICountry {
  id: number;
  imageUrl: string;
  location: ILocation;
  currency: ICurrency;
  ISOCode: string;
  capital: string;
  name: string;
}

interface ICardCountry {
  id: number;
  name: string;
  capital: string;
  imgUrl: string;
}

interface ICurrency {
  name: string;
  symbol: string;
  fullName: string;
}

interface ILocation {
  coordinates: ICoordinates;
  timezone: string;
}

interface ICoordinates {
  lat: number;
  lon: number;
}

type ILangs = "en" | "ru" | "be";

interface ICountriesAction {
  type: string;
  payload: Array<ICountry>;
}

interface ILangsAction {
  type: string;
  payload: ILangs;
}

interface IPlacesAction {
  type: string;
  payload: IPlaces;
}

interface IPlaces {
  id: number
  name: string
  description: string
  countryId: number
  imageUrl: string
}

interface IState {
  countries?:  Array<ICountry>
  places: Array<IPlaces>
}

export type {
  ICountry,
  ICoordinates,
  ILangs,
  ICardCountry,
  ICountriesAction,
  ILangsAction,
  IPlaces,
  IState,
  IPlacesAction,
};
