import { destructDataCardsFromDataCountries } from "../../services/destructDataCardsFromDataCountries";
import GridCards from "../../components/GridCards/GridCards";
import { composeMultiple } from "./helpers/composeMultiple";
import { ListWithLink } from "./components/ListWithLinks/ListWithLinks";
import { ListCardsCountries } from "./components/ListCardsCountries/ListCardsCountries";
import { useLocation } from "react-router";
import { useEffect } from "react";

interface IMain {
  dataCountries: any;
}

export const MainPage: React.FC<IMain> = ({ dataCountries }) => {
  const dataCards = destructDataCardsFromDataCountries(dataCountries);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/') {
      const input = document.getElementById('header_input') ! as HTMLInputElement;
      input.focus();
    }
  }, [])

  return (
    <div>
      <GridCards>
        {composeMultiple(ListWithLink, ListCardsCountries)(dataCards)}
      </GridCards>
    </div>
  );
};

export default MainPage;
