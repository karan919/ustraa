import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
