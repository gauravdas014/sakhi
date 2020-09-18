import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IndexPage } from './pages/index.jsx';
import { AuthPage } from './pages/auth';
import Header from "./components/Header.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <IndexPage />} />
          <Route path="/auth" exact component={AuthPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
