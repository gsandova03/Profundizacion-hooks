import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { Navbar } from './components/Navbar';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={ AboutPage }/>
          <Route exact path="/login" component={ LoginPage }/>
          <Route exact path="/" component={ HomePage }/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
}
