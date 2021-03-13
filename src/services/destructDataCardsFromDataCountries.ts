import { ICardCountry, ICountry } from '../interfaces';

export const destructDataCardsFromDataCountries = (data: ICountry[], lang: string): ICardCountry[] => {
    return data.map(({ id, imageUrl: {small}, localizations }) => {

      const indexLocale = localizations.findIndex((obj) => lang === obj.lang);
      const {capital, name} = localizations[indexLocale];

      return {
        id,
        name,
        capital,
        imgUrl: small,
      };

    });
  }