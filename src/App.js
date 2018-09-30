import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import OldhamMorris from './components/OldhamMorris';
import Result from './components/Result';
import Error from './components/Error';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Frontpage} exact />
      <Route path="/oldham-morris" component={OldhamMorris} exact />
      <Route path="/oldham-morris/result" component={Result} exact />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);
