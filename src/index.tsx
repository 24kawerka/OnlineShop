import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import { BrowserRouter, Route } from 'react-router-dom'
import { store, persistor } from './redux/Utils/createStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import ScrollToTop from './Utils/ScrollToTop';



ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ScrollToTop />
          <Route component={App} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);

