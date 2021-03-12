import { ICardCountry, ICountry } from '../interfaces';
import { getResizeImageUnsplash } from './getResizeImageUnsplash';

export const destructDataCardsFromDataCountries = (data: ICountry[], lang: string): ICardCountry[] => {
    return data.map(({ id, imageUrl, localizations }) => {

      const indexLocale = localizations.findIndex((obj) => lang === obj.lang);
      const {capital, name} = localizations[indexLocale];

      return {
        id,
        name,
        capital,
        imgUrl: getResizeImageUnsplash(imageUrl, 380),
      };

    });
  }