import { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCountries } from "./redux/actions/actions";
import { LangContext } from "./contexts/lang-context";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Page404 from "./pages/Page404/Page404";
import { getData } from "./services/getData";
import { ICountry } from "./interfaces";
import { CountryPage } from "./pages/CountryPage/CountryPage";

function App() {
  const dispatch = useDispatch();

  const { lang } = useContext(LangContext);

  useEffect(() => {
    getData(lang, "countries").then((data: ICountry[]) => {
      dispatch(setCountries(data));
    });
  }, [lang, dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/country/:id">
              <CountryPage />
            </Route>
            <Route path="/404">
              <Page404 />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
