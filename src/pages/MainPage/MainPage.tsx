import { destructDataCardsFromDataCountries } from '../../services/destructDataCardsFromDataCountries';
import GridCards from '../../components/GridCards/GridCards';
import { composeMultiple } from './helpers/composeMultiple';
import { ListWithLink } from './components/ListWithLinks/ListWithLinks';
import { ListCardsCountries } from './components/ListCardsCountries/ListCardsCountries';

interface IMain {
  dataCountries: any
}

export const MainPage: React.FC<IMain> = ({dataCountries}) => {
  const dataCards = destructDataCardsFromDataCountries(dataCountries);

  return (
    <div>
      <GridCards>
        {composeMultiple(ListWithLink, ListCardsCountries)(dataCards)}
      </GridCards>
    </div>
  )
}

export default MainPage;