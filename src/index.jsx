import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NewCategory from './pages/NewCategory';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new/video" component={NewVideo} />
      <Route path="/new/category" component={NewCategory} />
      <Route component={() => <div>404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
