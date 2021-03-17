import { useSelector } from 'react-redux';
import { destructDataCardsFromDataCountries } from '../../services/destructDataCardsFromDataCountries';
import GridCards from '../../components/GridCards/GridCards';
import { composeMultiple } from './helpers/composeMultiple';
import { ListWithLink } from './components/ListWithLinks/ListWithLinks';
import { ListCardsCountries } from './components/ListCardsCountries/ListCardsCountries';
import { RootState } from '../../redux/reducers';

export const MainPage = () => {
  const dataCountries = useSelector((state: RootState) => state.countries);
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