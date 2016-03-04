import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import BandList from './components/BandList';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <BandList/>
  </Provider>,
  document.getElementById('app')
);
