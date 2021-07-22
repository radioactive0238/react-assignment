import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.js';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// reportWebVitals();
