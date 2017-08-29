import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

class App extends React.Component {
  render() {
    return <h3>App</h3>
  }
}

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('content')
);
