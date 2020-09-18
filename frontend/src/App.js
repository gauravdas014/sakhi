import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthPage } from './pages/auth';
import Header from "./components/Header.jsx";
import Store from "./pages/Store.jsx"; //this is homepage
import { Dashboard } from './pages/Dashboard';
import ProductPage from "./pages/ProductPage.jsx";
import JobPage from "./pages/Job.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Store} />
          <Route path="/auth" exact component={AuthPage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/product-page/:id" exact component={ProductPage} />
          <Route path="/job/:id" exact component={JobPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
