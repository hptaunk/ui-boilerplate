import React, {Component} from 'react';
import {Router} from 'react-router';
import { Provider } from 'react-redux';
import history from './RouteHistory';
import routes from '../routes';



class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
         <Router routes={routes} history={history}></Router>
      </Provider>
    );
  }
}

export default Root;
