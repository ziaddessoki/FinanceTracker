import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { GlobalProvider } from './context/GlobalState'
import Account from './components/Account/Account'
import Login from './components/Login'


function App() {
  return (

    <GlobalProvider>
      <Account />
      <Login />
    </GlobalProvider>

  );
}

export default App;
