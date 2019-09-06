import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import App from './App';
import './index.css';
const { store, persistor } = configureStore();
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}><PersistGate persistor={persistor}>
  <BrowserRouter><App /></BrowserRouter>
  </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
