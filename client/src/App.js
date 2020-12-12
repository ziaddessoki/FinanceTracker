import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Account from './components/Account/Account'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'

function App() {
  return (

    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </GlobalProvider>

  );
}

export default App;
