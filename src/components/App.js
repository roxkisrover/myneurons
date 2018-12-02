import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import OldhamMorris from './OldhamMorris';
import Result from './OldhamMorris/Result';
import Error from './Error';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/oldham-morris" component={OldhamMorris} exact />
        <Route path="/oldham-morris/:type" component={Result} />
        <Route component={Error} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
