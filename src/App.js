import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import LoginAndRegistration from './components/LoginAndRegistration/'
import Users from './components/Users/'

import './components/style.scss';

function App() {

  return (
    <>
      <div className="App">
        <Router>
          {localStorage.getItem('reqresToken') ? <Redirect to="/users" /> : <Redirect to="/" />}
          <Switch>
            <Route path="/" exact component={LoginAndRegistration} />
            <Route
              path="/users"
              component={Users}
            />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
