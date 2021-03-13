import { Card } from '../Card';
import { ICardCountry } from '../../interfaces';

export const ListCardsCountries = (data: ICardCountry[]) => {
  return data.map(({id, name, capital, imgUrl}) => (
    <Card key={id} data={ {id, title: name, subtitle: capital, imgUrl} } />
  ))
};