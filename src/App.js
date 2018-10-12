import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import OldhamMorris from './components/OldhamMorris';
import Result from './components/OldhamMorris/Result';
import Adventurous from './components/OldhamMorris/Result/Adventurous';
import Aggressive from './components/OldhamMorris/Result/Aggressive';
import Conscientious from './components/OldhamMorris/Result/Conscientious';
import Devoted from './components/OldhamMorris/Result/Devoted';
import Dramatic from './components/OldhamMorris/Result/Dramatic';
import Idiosyncratic from './components/OldhamMorris/Result/Idiosyncratic';
import Leisurely from './components/OldhamMorris/Result/Leisurely';
import Mercurial from './components/OldhamMorris/Result/Mercurial';
import SelfConfident from './components/OldhamMorris/Result/SelfConfident';
import SelfSacrificing from './components/OldhamMorris/Result/SelfSacrificing';
import Sensitive from './components/OldhamMorris/Result/Sensitive';
import Serious from './components/OldhamMorris/Result/Serious';
import Solitary from './components/OldhamMorris/Result/Solitary';
import Vigilant from './components/OldhamMorris/Result/Vigilant';
import Error from './components/Error';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Frontpage} exact />
      <Route path="/oldham-morris" component={OldhamMorris} exact />
      <Route path="/oldham-morris/result" component={Result} exact />
      <Route path="/oldham-morris/result/adventurous" component={Adventurous} exact />
      <Route path="/oldham-morris/result/aggressive" component={Aggressive} exact />
      <Route path="/oldham-morris/result/conscientious" component={Conscientious} exact />
      <Route path="/oldham-morris/result/devoted" component={Devoted} exact />
      <Route path="/oldham-morris/result/dramatic" component={Dramatic} exact />
      <Route path="/oldham-morris/result/idiosyncratic" component={Idiosyncratic} exact />
      <Route path="/oldham-morris/result/leisurely" component={Leisurely} exact />
      <Route path="/oldham-morris/result/mercurial" component={Mercurial} exact />
      <Route path="/oldham-morris/result/self-confident" component={SelfConfident} exact />
      <Route path="/oldham-morris/result/self-sacrificing" component={SelfSacrificing} exact />
      <Route path="/oldham-morris/result/sensitive" component={Sensitive} exact />
      <Route path="/oldham-morris/result/serious" component={Serious} exact />
      <Route path="/oldham-morris/result/solitary" component={Solitary} exact />
      <Route path="/oldham-morris/result/vigilant" component={Vigilant} exact />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
