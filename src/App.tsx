import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { ICountry } from './interfaces';
import { getDataCountries } from './services/getDataCountries';

import './App.css';

function App() {
  const [dataCountries, setDataCountries] = useState<ICountry[] | []>([]);

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

  return (
    <Router>
      <div className="App">
        <header>header</header>

        <main>
        <Switch>
          <Route exact path="/">
            <h2>Grid Cards</h2>
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
