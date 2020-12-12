import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { GlobalProvider } from './context/GlobalState'
import Account from './components/Account/Account'
import Login from './components/Auth/Login'


function App() {
  return (

    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
        </Switch>
      </Router>
    </GlobalProvider>

  );
}

export default App;
