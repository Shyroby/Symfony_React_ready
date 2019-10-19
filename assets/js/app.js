import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Containers/Home'
import {BrowserRouter} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/index" component={Home} />
      </Switch>
      </BrowserRouter>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));