import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Import Provider & Store From Redux
import { Provider } from 'react-redux';
import store from './store';

//Wrap Provider with Store Around App Component
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

