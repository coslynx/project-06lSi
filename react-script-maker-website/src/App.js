import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ScriptDetails from './pages/ScriptDetails';
import PurchaseHistory from './pages/PurchaseHistory';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/script/:id" component={ScriptDetails} />
        <Route exact path="/purchases" component={PurchaseHistory} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;