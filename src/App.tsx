
import { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from './redux/actions/actions';
import { LangContext } from './contexts/lang-context';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import { CountryPage } from "./pages/CountryPage/CountryPage";
import Header from './components/Header/Header';
import Page404 from './pages/Page404/Page404';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { getData } from './services/getData';
import { ICountry } from './interfaces';
import { RootState } from './redux/reducers';

function App() {
  const [dataCountries, setDataCountries] = useState<ICountry[] | []>([]);
  const state = useSelector((state: RootState) => state.countries);
  const dispatch = useDispatch();
  const { lang } = useContext(LangContext);
  const [counter, setCounter] = useState(0);

  

  useEffect(() => {
    getData(lang, "countries").then((data: ICountry[]) => {
      dispatch(setCountries(data));
      setDataCountries(data);
    });
  }, [lang, dispatch]);

  

  const refreshHeader = () => setCounter(counter + 1);
  
  const handleSearch = (value: string) => {
    const searchedCountries =
      state.filter((item) => {
        const reg = new RegExp(value, "i");
        if(item.name.match(reg) || item.capital.match(reg)){
          return true;
        }
      }) || [];

    setDataCountries(searchedCountries)
  }

  return (
    <Router>
      <div className="App">

        <Header
          refresher={counter}
          handleSearch={handleSearch}
        />

        <main>
        <Switch>
          <Route exact path="/">
            <MainPage dataCountries={dataCountries}/>
          </Route>
          <Route path="/country/:id">
            <CountryPage />
          </Route>
          <Route path="/404">
            <Page404 />
          </Route>
          <Route path="/registration">
            <Registration forceHeaderRefresh={refreshHeader}/>
          </Route>
          <Route path="/login">
            <Login forceHeaderRefresh={refreshHeader}/>
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
