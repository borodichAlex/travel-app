import { ICardCountry, ICountry } from '../interfaces';
import { getResizeImageUnsplash } from './getResizeImageUnsplash';

export const destructDataCardsFromDataCountries = (data: ICountry[], lang: string): ICardCountry[] => {
    return data.map(({ id, imageUrl,  capital, name }) => { //добавил параметр размера img в компоненте Card

      // const indexLocale = localizations.findIndex((obj) => lang === obj.lang);
      // const {capital, name} = localizations[indexLocale];     локализация у нас теперь происход на уровне запроса к апи
                                                              // соответственно дополнил интерфейсы
      // console.log(imgUrl)

      return {
        id,
        name,
        capital,
        imgUrl: imageUrl,
      };

    });
  }