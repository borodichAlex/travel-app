import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { ICardCountry, ICountry } from './interfaces';
import { getDataCountries } from './services/getDataCountries';
import { destructDataCardsFromDataCountries } from './services/destructDataCardsFromDataCountries';
import GridCards from './components/GridCards/GridCards';
import { composeMultiple } from './helpers/composeMultiple';
import { ListWithLink } from './components/ListWithLinks/ListWithLinks';
import { ListCardsCountries } from './components/ListCardsCountries/ListCardsCountries';

import './App.css';
import Header from './components/Header/Header';

const lang = 'be';

function App() {
  const [dataCountries, setDataCountries] = useState<ICountry[] | []>([]);
  const [dataCards, setDataCards] = useState<ICardCountry[] | []>([]);

  useEffect(() => {
    let mounted = true;

    getDataCountries()
      .then((data: ICountry[]) => {

        if (mounted) {
          setDataCountries(data);
        }

      })

    return () => {mounted = false};
  }, []);

  useEffect(() => {
    const data = destructDataCardsFromDataCountries(dataCountries, lang);
    setDataCards(data);
  }, [dataCountries])

  return (
    <Router>
      <div className="App">
        <Header />

        <main>
        <Switch>
          <Route exact path="/">
            <GridCards>
              {composeMultiple(ListWithLink, ListCardsCountries)(dataCards)}
            </GridCards>
          </Route>
          <Route path="/country/:id">
            <h2>Country</h2>
          </Route>
          <Route path="/404">
            <h2>404</h2>
          </Route>
          <Redirect to="404" />
        </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
