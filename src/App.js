import Navbar from './components/Navbar';
import Home from './components/Home';
import './style/style.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="body-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>

        </div>
      </div>
    </Router>

  );
}

export default App;
