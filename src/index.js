import React from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import calcul from './reducers/calcul';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(calcul);

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') 
);
