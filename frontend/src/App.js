import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Homepage } from './pages/Homepage.jsx';
import { AuthPage } from './pages/auth';
import Header from "./components/Header.jsx";
import Store from "./pages/Store.jsx";
import { Dashboard } from './components/Dashboard';
import ProductPage from "./pages/ProductPage.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" exact component={AuthPage} />
          <Route path="/" exact component={Store} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/dashboard" exact component={Dashboard} />

          <Route path="/product-page/:id" exact component={ProductPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
