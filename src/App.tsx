/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { ICardCountry, ICountry, IState, IPlaces } from "./interfaces";
import { getData } from "./services/getData";
import { destructDataCardsFromDataCountries } from "./services/destructDataCardsFromDataCountries";
import GridCards from "./components/GridCards/GridCards";
import { composeMultiple } from "./helpers/composeMultiple";
import { ListWithLink } from "./components/ListWithLinks/ListWithLinks";
import { ListCardsCountries } from "./components/ListCardsCountries/ListCardsCountries";
import { CountryPage } from "./pages/CountryPage/CountryPage";

import "./App.css";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setCountries, setPlaces } from "./redux/actions/actions";

// const lang = 'be';

function App() {
  const [dataCountries, setDataCountries] = useState<ICountry[] | []>([]);
  const [dataCards, setDataCards] = useState<ICardCountry[] | []>([]);
  const [lang, setLang] = useState("en");
  const state: IState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const lang = state.lang?.state ? state.lang.state : "en";
    setLang(lang);
  }, [state.lang?.state]);

  useEffect(() => {
    let mounted = true;

    getData(lang, "countries") //переделал функцию на универсальную для разных запросов
      .then((data: ICountry[]) => {
        if (mounted) {
          setDataCountries(data);
          dispatch(setCountries(data));
        }
      });

    getData(lang, "places").then((data: Array<IPlaces>) => {
      dispatch(setPlaces(data));
    });

    return () => {
      mounted = false;
    };
  }, [lang]);

  useEffect(() => {
    const data = destructDataCardsFromDataCountries(dataCountries, lang);
    setDataCards(data);
  }, [dataCountries]);

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
              <CountryPage />
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
