// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { devTools } from 'redux-devtools';

import indexReducer from '../reducers/index';
import navReducer from '../reducers/nav';
import sessionReducer from '../reducers/session';
export default compose(
  applyMiddleware(thunk)
  ,
  window.devToolsExtension ? window.devToolsExtension() : undefined
)(createStore)(combineReducers({indexReducer, navReducer, sessionReducer}));