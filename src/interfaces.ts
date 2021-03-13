interface ICountry {
  id: number;
  imageUrl: string;
  location: ILocation;
  currency: ICurrency;
  localizations: ILocalization[];
  ISOCode: string;
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
  }
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

type ILangs = 'en' | 'ru' | 'be';

export type {
  ICountry,
  ICoordinates,
  ILangs,
  ICardCountry,
}