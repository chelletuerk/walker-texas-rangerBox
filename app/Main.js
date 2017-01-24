import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App'
import JokeButton from './components/Button/JokeButton'
import './styles'
import Header from './components/Header/Header'
import RandoJoke from './components/randoJoke'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';


// const App = () => {
//   return (
//     <div>
//       <Header />
//       <div className='rando-joke'>Rando Joke</div>
//       {/* <JokeButton /> */}
//     </div>
//   )
// }
//
// render(<App />, document.querySelector('.application'));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header} >
      <IndexRoute to='/jokes' component={RandoJoke} />
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
    </Route>
  </Router>
, document.getElementById('application'));
