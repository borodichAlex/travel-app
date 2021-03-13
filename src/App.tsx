import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

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
