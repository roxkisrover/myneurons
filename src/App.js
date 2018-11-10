import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import OldhamMorris from './components/OldhamMorris';
import Result from './components/OldhamMorris/Result';
import Error from './components/Error';

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
