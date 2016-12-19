import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store/configStore';
import Root from './container/Root';
import {sessionInitialize} from './actions';

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Root, {store: store}), element);

document.body.classList.remove('loading');

store.dispatch(sessionInitialize());
