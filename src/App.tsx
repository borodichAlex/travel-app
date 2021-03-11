import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GridCards from './components/GridCards/GridCards';
import { composeMultiple } from './helpers/composeMultiple';
import { ListWithLink } from './components/ListWithLinks/ListWithLinks';
import { ListCardsCountries } from './components/ListCardsCountries/ListCardsCountries';
import { dataCards as mockDataCards } from './helpers/mockData/dataCards';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>header</header>

        <main>
          <Switch>
            <Route exact path="/">
              <GridCards>
                {composeMultiple(ListWithLink, ListCardsCountries)(mockDataCards)}
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

        <footer>footer</footer>
      </div>
    </Router>
  );
}

export default App;
