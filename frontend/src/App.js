import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IndexPage } from './pages';
import { AuthPage } from './pages/auth';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <IndexPage />} />
          <Route path="/auth" exact component={AuthPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
