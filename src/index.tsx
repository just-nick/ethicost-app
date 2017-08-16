import * as React from 'react';
import { render } from 'react-dom';
import createStore from './app/create-store';
import Application from './app/application';

import './index.scss';

let store = createStore();

render(
  <Application store={store} />,
  document.getElementById('app')
);