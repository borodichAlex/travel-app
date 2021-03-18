import { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCountries } from './redux/actions/actions';
import { LangContext } from './contexts/lang-context';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import Page404 from './pages/Page404/Page404';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { getData } from './services/getData';
import { ICountry } from './interfaces';

function App() {
  const dispatch = useDispatch();

  const { lang } = useContext(LangContext);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getData(lang, 'countries')
      .then((data: ICountry[]) => {
        dispatch(setCountries(data))
      })
  }, [lang, dispatch]);

  const refreshHeader = () => setCounter(counter + 1);

  return (
    <Router>
      <div className="App">
        <Header refresher={counter} />

        <main>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/country/:id">
            <h2>Country</h2>
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
