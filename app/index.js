import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App'
import Header from './components/Header/Header'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import './styles'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header} >
      </Route>
      <Route path="/jokes">
      <IndexRoute component={App} />
    </Route>

        {/* IndexRoute to='/jokes'  **jokes go where '/home' is  */}
      {/* <Route path="/home" component={Home} />
      <Route path='articles' component={Articles}> */}
        {/* <IndexRoute component={Articles} /> */}
        {/* <Route path=':name' component={Article} />
      </Route>
      <Route path='todos'>
        <IndexRoute component={ToDoList} />
        <Route path=":title" component={ToDo} /> */}
      {/* </Route> */}
  </Router>
, document.getElementById('application'));
