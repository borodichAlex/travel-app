import { ICardCountry, ICountry } from '../interfaces';

export const destructDataCardsFromDataCountries = (data: ICountry[]): ICardCountry[] => {
  return data.map(({ id, imageUrl,  capital, name }) => {

    return {
      id,
      name,
      capital,
      imgUrl: imageUrl,
    };

  });
  }