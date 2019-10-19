import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Containers/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));