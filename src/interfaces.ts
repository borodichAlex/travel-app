interface ICountry {
  id: number;
  imageUrl: string;
  location: ILocation;
  currency: ICurrency;
  // localizations: ILocalization[];
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

interface ILocalization {
  lang: string;
  name: string;
  capital: string;
  description: string;
  currency: {
    fullName: string;
  };
}

interface ICurrency {
  name: string;
  symbol: string;
}

interface ILocation {
  coordinates: ICoordinates;
  timezone: string;
}

interface ICoordinates {
  lat: number;
  lon: number;
}

interface IImageUrl {
  large: string;
  small: string;
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
  lang:  ILangs
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
