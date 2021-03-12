import { Card } from '../Card';

type ICardCountry = {
  id: number;
  name: string;
  capital: string;
  imgUrl: string;
}

export const ListCardsCountries = (data: ICardCountry[]) => {
  return data.map(({id, name, capital, imgUrl}) => (
    <Card key={id} data={ {id, title: name, subtitle: capital, imgUrl} } />
  ))
};