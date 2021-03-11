import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
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

        <footer>footer</footer>
      </div>
    </Router>
  );
}

export default App;
