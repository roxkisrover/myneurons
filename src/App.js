import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import OldhamMorris from './components/OldhamMorris';
import Result from './components/Result';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={Frontpage} />
      <Route exact path="/oldham-morris" component={OldhamMorris} />
      <Route path="/oldham-morris/:type" component={Result} />
    </Switch>
  </div>
);
