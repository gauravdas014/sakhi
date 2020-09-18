import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Homepage } from './pages/Homepage.jsx';
import { AuthPage } from './pages/auth';
import Header from "./components/Header.jsx";
import Store from "./pages/Store.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Homepage />} />
          <Route path="/auth" exact component={AuthPage} />
          <Route path="/store" exact component={Store} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
