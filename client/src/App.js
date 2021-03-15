import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Account from './components/Account/Account'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Landing from './components/Landing'



function App() {


  return (
    <GlobalProvider>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/account" component={Account} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>

  );
}

export default App;
