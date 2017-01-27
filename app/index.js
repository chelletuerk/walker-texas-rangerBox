import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Header from './components/Header/Header'
import Favorites from './components/Favorites'
import Settings from './components/Settings'

import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory,
  IndexRedirect
} from 'react-router';

import './styles'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header} >
      <Route path="/jokes">
        <IndexRoute component={App} />
        <Route path="/favorites" component={Favorites}></Route>
          <Route path="/settings" component={Settings}></Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('application'),
);
