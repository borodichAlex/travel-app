import { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries, setPlaces } from './redux/actions/actions';
import { LangContext } from './contexts/lang-context';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import Page404 from './pages/Page404/Page404';
import { getData } from './services/getData';
import { ICountry, IPlaces } from './interfaces';
import { RootState } from './redux/reducers';

function App() {
  const [dataCountries, setDataCountries] = useState<ICountry[] | []>([]);
  const state = useSelector((state: RootState) => state.countries)
  const dispatch = useDispatch();
  const { lang } = useContext(LangContext);

  const handleSearch = (value: string) => {

    const searchedCountries = state.filter((item) => {
      const reg = new RegExp(value, 'i');
      return item.name.match(reg)
    }) || [];

    setDataCountries(searchedCountries)
  }


  useEffect(() => {
    getData(lang, 'countries')
      .then((data: ICountry[]) => {
        dispatch(setCountries(data))
        setDataCountries(data)
      })

      getData(lang, 'places')
      .then((data: IPlaces[]) => {
        dispatch(setPlaces(data))
      })
  }, [lang, dispatch]);

  return (
    <Router>
      <div className="App">
        <Header 
          handleSearch={handleSearch} 
        />

        <main>
        <Switch>
          <Route exact path="/">
            <MainPage dataCountries={dataCountries}/>
          </Route>
          <Route path="/country/:id">
            <h2>Country</h2>
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
